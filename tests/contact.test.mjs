import { test } from 'node:test';
import assert from 'node:assert/strict';
import { handleContact } from '../src/server/contact.ts';

let address = 0;
const payload = { name: 'Contact test', email: 'test@example.com', message: 'Hello <b>engineer</b> 👋', website: '' };
const request = (data = payload, headers = {}) => new Request('https://portfolio.example/api/contact', {
  method: 'POST', headers: { origin: 'https://portfolio.example', 'content-type': 'application/json', ...headers },
  body: typeof data === 'string' ? data : JSON.stringify(data),
});
const options = (extra = {}) => ({ token: '123:fake_test_token', chatId: '12345', clientAddress: `test-${address++}`, ...extra });

test('delivers plain text with email, suppresses previews, and confirms acceptance', async () => {
  let sent;
  const response = await handleContact(request(), options({ send: async (_url, init) => {
    sent = JSON.parse(init.body);
    return Response.json({ ok: true });
  } }));
  assert.equal(response.status, 200);
  assert.equal((await response.json()).ok, true);
  assert.match(sent.text, /test@example.com/);
  assert.match(sent.text, /<b>engineer<\/b>/);
  assert.equal(sent.parse_mode, undefined);
  assert.equal(sent.link_preview_options.is_disabled, true);
  assert.equal(response.headers.get('cache-control'), 'no-store');
});

test('rejects invalid input, oversized bodies, malformed JSON and honeypot without delivery', async () => {
  for (const data of [null, [], '{', { ...payload, name: '' }, { ...payload, name: 'fake\nEmail: spoof' },
    { ...payload, email: 'invalid' }, { ...payload, message: ' ' }, { ...payload, message: 'x'.repeat(3001) },
    { ...payload, website: 'spam' }, 'x'.repeat(16001)]) {
    const response = await handleContact(request(data), options({ send: async () => assert.fail('must not send') }));
    assert.equal(response.status, 400);
    assert.equal((await response.json()).ok, false);
  }
});

test('blocks cross-origin requests and wrong content type', async () => {
  for (const [headers, status] of [[{ origin: 'https://evil.example' }, 403], [{ 'sec-fetch-site': 'cross-site' }, 403],
    [{ 'content-type': 'text/plain' }, 415]]) {
    assert.equal((await handleContact(request(payload, headers), options())).status, status);
  }
});

test('missing credentials return unavailable, not success', async () => {
  assert.equal((await handleContact(request(), options({ token: undefined }))).status, 503);
  assert.equal((await handleContact(request(), options({ chatId: undefined }))).status, 503);
});

test('upstream failure and timeout never report success or expose secrets; no retry', async () => {
  for (const send of [async () => Response.json({ ok: false }, { status: 400 }),
    async () => Response.json({ ok: false }), async () => { throw new Error('secret URL'); }]) {
    let calls = 0;
    const response = await handleContact(request(), options({ send: async (...args) => { calls++; return send(...args); } }));
    assert.ok(response.status >= 500);
    const body = await response.json();
    assert.equal(body.ok, false);
    assert.ok(!JSON.stringify(body).includes('secret URL'));
    assert.equal(calls, 1);
  }
});

test('limits attempts in one instance independently per address', async () => {
  const opts = options({ send: async () => Response.json({ ok: true }) });
  for (let i = 0; i < 5; i++) assert.equal((await handleContact(request(), opts)).status, 200);
  assert.equal((await handleContact(request(), opts)).status, 429);
  assert.equal((await handleContact(request(), options({ send: opts.send }))).status, 200);
});
