import { NextResponse } from "next/server"
import { getAdminSession } from "@/lib/admin-auth"
import {
  getAllPacotesEspeciais,
  savePacotesEspeciais,
  type PacoteEspecial,
} from "@/lib/pacotes-especiais"

async function requireAuth() {
  const session = await getAdminSession()
  if (!session) {
    return null
  }
  return true
}

export async function GET() {
  const auth = await requireAuth()
  if (!auth) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
  }
  try {
    const all = getAllPacotesEspeciais()
    return NextResponse.json(all)
  } catch {
    return NextResponse.json([])
  }
}

export async function POST(request: Request) {
  const auth = await requireAuth()
  if (!auth) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
  }
  try {
    const body = await request.json()
    const pacotes = Array.isArray(body) ? (body as PacoteEspecial[]) : []
    savePacotesEspeciais(pacotes)
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[admin pacotes-especiais]", err)
    return NextResponse.json(
      { error: "Erro ao salvar. Em produção (Vercel) use armazenamento externo." },
      { status: 500 }
    )
  }
}
