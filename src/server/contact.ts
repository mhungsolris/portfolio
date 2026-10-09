type Options = {
  token?: string;
  chatId?: string;
  clientAddress: string;
  send?: typeof fetch;
};

const attempts = new Map<string, { count: number; expires: number }>();
const windowMs = 10 * 60 * 1000;
const maxBytes = 16000;
const reply = (status: number, message: string, ok = false) =>
  Response.json({ ok, message }, { status, headers: { "Cache-Control": "no-store" } });

// Best-effort per-instance protection. Vercel instances do not share this map.
function limited(address: string) {
  const now = Date.now();
  for (const [key, value] of attempts) if (value.expires <= now) attempts.delete(key);
  const bucket = attempts.get(address);
  if (bucket) return ++bucket.count > 5;
  if (attempts.size >= 10000) return true;
  attempts.set(address, { count: 1, expires: now + windowMs });
  return false;
}

async function readBody(request: Request) {
  const reader = request.body?.getReader();
  if (!reader) throw new Error("empty");
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > maxBytes) { await reader.cancel(); throw new Error("large"); }
      chunks.push(value);
    }
  } finally { reader.releaseLock(); }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
  return JSON.parse(new TextDecoder().decode(bytes));
}

export async function handleContact(request: Request, options: Options): Promise<Response> {
  const origin = request.headers.get("origin");
  if (origin !== new URL(request.url).origin || request.headers.get("sec-fetch-site") === "cross-site") {
    return reply(403, "Please send your message from this website.");
  }
  if (request.headers.get("content-type")?.split(";")[0].trim() !== "application/json") {
    return reply(415, "Please use the contact form on this website.");
  }
  if (limited(options.clientAddress)) return reply(429, "Too many attempts. Please wait 10 minutes or use the email link.");

  let data;
  try { data = await readBody(request); }
  catch { return reply(400, "Invalid message. Please check the form and try again."); }
  if (!data || typeof data !== "object" || Array.isArray(data)) return reply(400, "Invalid message.");
  if (data.website) return reply(400, "Unable to send this message. Please use the email link.");
  const { name, email, message } = data;
  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string" ||
      !name.trim() || name.length > 150 || /[\r\n\x00-\x1f\x7f]/.test(name) ||
      email.length > 254 || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email) || /[\x00-\x1f\x7f]/.test(email) ||
      !message.trim() || message.length > 3000 || /[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/.test(message)) {
    return reply(400, "Please enter a name, valid email and message (up to 3,000 characters).");
  }
  const token = options.token?.trim();
  const chatId = options.chatId?.trim();
  if (!token || !/^\d+:[A-Za-z0-9_-]+$/.test(token) || !chatId || !/^-?\d+$/.test(chatId)) {
    return reply(503, "The contact form is temporarily unavailable. Please use the email link.");
  }
  const text = `Portfolio contact\n\nName: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`;
  try {
    const response = await (options.send ?? fetch)(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, link_preview_options: { is_disabled: true } }),
      signal: AbortSignal.timeout(10000),
    });
    const result = await response.json();
    if (!response.ok || result.ok !== true) return reply(502, "Unable to send right now. Please use the email link.");
    return reply(200, "Message sent.", true);
  } catch {
    // Never log fetch errors: their URL contains the bot credential.
    // No retry: Telegram may have accepted a request before a network timeout.
    return reply(504, "Could not confirm delivery. Please use the email link.");
  }
}
