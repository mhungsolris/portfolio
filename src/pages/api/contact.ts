import type { APIRoute } from "astro";
import { getSecret } from "astro:env/server";
import { handleContact } from "../../server/contact";

export const prerender = false;

export const POST: APIRoute = ({ request, clientAddress }) => handleContact(request, {
  token: getSecret("TELEGRAM_BOT_TOKEN"),
  chatId: getSecret("TELEGRAM_CHAT_ID"),
  clientAddress,
});

export const ALL: APIRoute = () => new Response(null, {
  status: 405,
  headers: { Allow: "POST", "Cache-Control": "no-store" },
});
