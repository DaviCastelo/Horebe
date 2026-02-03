/**
 * URLs e dados de contato centralizados.
 * Para produção, defina NEXT_PUBLIC_BOOKING_URL e NEXT_PUBLIC_WHATSAPP no .env.local
 */

const DEFAULT_BOOKING_URL =
  "https://www.booking.com/hotel/br/estancia-monte-horebe.pt-br.html?label=estancia-monte-horebe-uYNjynFmZO8Bv6ZjUtddJQS704512921388%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1835805265912%3Alp9222782%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YbC4OlOULAnvcrFmvh1xnqM&sid=7be39d76465260ab76f140f6b428dba9&gclid=CjwKCAiA55rJBhByEiwAFkY1QNXwecpnSh3OLR8HcYEhdUA_PXaU9Sw_Qfim3AIbrPBC3lO-yZW34BoCZgUQAvD_BwE&aid=1726433&ucfs=1&arphpl=1&dest_id=-656419&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=1&hapos=1&sr_order=popularity&srpvid=76f593f33f4d076b&srepoch=1764190961&from=searchresults"

const DEFAULT_WHATSAPP_NUMBER = "5585988662996"

/** URL da página de reservas no Booking (use NEXT_PUBLIC_BOOKING_URL no .env para sobrescrever) */
export const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL?.trim() || DEFAULT_BOOKING_URL

/** Número principal de WhatsApp sem + (use NEXT_PUBLIC_WHATSAPP no .env para sobrescrever) */
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP?.trim() || DEFAULT_WHATSAPP_NUMBER

/** Gera link do WhatsApp para o número principal, com mensagem opcional */
export function getWhatsAppUrl(text?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  if (text) return `${base}?text=${encodeURIComponent(text)}`
  return base
}
