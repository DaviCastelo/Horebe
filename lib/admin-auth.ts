import { cookies } from "next/headers"
import crypto from "node:crypto"

const COOKIE_NAME = "admin_session"
const MAX_AGE = 60 * 60 * 24 // 24 horas

function getSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET
  if (!secret || secret.length < 32) {
    throw new Error("ADMIN_SESSION_SECRET must be set and at least 32 characters")
  }
  return secret
}

export function createSessionToken(): string {
  const secret = getSecret()
  const payload = `${Date.now()}-${crypto.randomBytes(16).toString("hex")}`
  const signature = crypto.createHmac("sha256", secret).update(payload).digest("hex")
  return `${payload}.${signature}`
}

export function verifySessionToken(token: string): boolean {
  try {
    const secret = getSecret()
    const [payload, signature] = token.split(".")
    if (!payload || !signature) return false
    const expected = crypto.createHmac("sha256", secret).update(payload).digest("hex")
    return crypto.timingSafeEqual(Buffer.from(signature, "hex"), Buffer.from(expected, "hex"))
  } catch {
    return false
  }
}

export async function getAdminSession(): Promise<string | null> {
  const cookieStore = await cookies()
  const cookie = cookieStore.get(COOKIE_NAME)
  if (!cookie?.value) return null
  return verifySessionToken(cookie.value) ? cookie.value : null
}

export async function setAdminCookie(token: string): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: MAX_AGE,
    path: "/",
  })
}

export async function clearAdminCookie(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete(COOKIE_NAME)
}

/** Verifica se ADMIN_PASSWORD e ADMIN_SESSION_SECRET estão definidos (para mensagens de erro) */
export function isAdminConfigured(): boolean {
  const pwd = process.env.ADMIN_PASSWORD?.trim()
  const secret = process.env.ADMIN_SESSION_SECRET?.trim()
  return Boolean(pwd && secret && secret.length >= 32)
}

export function validatePassword(password: string): boolean {
  const expected = process.env.ADMIN_PASSWORD?.trim()
  if (!expected) return false
  const input = password.trim()
  if (input.length !== expected.length) return false
  return crypto.timingSafeEqual(Buffer.from(input, "utf8"), Buffer.from(expected, "utf8"))
}
