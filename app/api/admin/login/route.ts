import { NextResponse } from "next/server"
import {
  validatePassword,
  isAdminConfigured,
  createSessionToken,
  setAdminCookie,
} from "@/lib/admin-auth"

export async function POST(request: Request) {
  try {
    if (!isAdminConfigured()) {
      return NextResponse.json(
        {
          error:
            "Admin não configurado. Crie o arquivo .env.local na raiz do projeto com ADMIN_PASSWORD e ADMIN_SESSION_SECRET (mín. 32 caracteres) e reinicie o servidor.",
        },
        { status: 503 }
      )
    }

    const body = await request.json()
    const password = typeof body.password === "string" ? body.password.trim() : ""

    if (!password) {
      return NextResponse.json(
        { error: "Senha obrigatória" },
        { status: 400 }
      )
    }

    if (!validatePassword(password)) {
      return NextResponse.json(
        { error: "Senha incorreta" },
        { status: 401 }
      )
    }

    const token = createSessionToken()
    await setAdminCookie(token)

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[admin login]", err)
    return NextResponse.json(
      { error: "Erro no servidor. Verifique ADMIN_SESSION_SECRET." },
      { status: 500 }
    )
  }
}
