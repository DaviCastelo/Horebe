import { NextResponse } from "next/server"
import { del, put } from "@vercel/blob"
import { getAdminSession } from "@/lib/admin-auth"

const MAX_SIZE_BYTES = 5 * 1024 * 1024
const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp"])

function sanitizeBaseName(name: string): string {
  return name
    .normalize("NFD")
    .replaceAll(/[\u0300-\u036f]/g, "")
    .replaceAll(/[^a-zA-Z0-9._-]/g, "-")
    .replaceAll(/-+/g, "-")
    .toLowerCase()
}

function isAllowedBlobUrl(value: string): boolean {
  try {
    const parsed = new URL(value)
    return parsed.protocol === "https:" && parsed.hostname.endsWith(".public.blob.vercel-storage.com")
  } catch {
    return false
  }
}

export async function POST(request: Request) {
  const session = await getAdminSession()
  if (!session) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
  }

  try {
    const formData = await request.formData()
    const file = formData.get("file")

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Arquivo inválido." }, { status: 400 })
    }

    if (!ALLOWED_TYPES.has(file.type)) {
      return NextResponse.json(
        { error: "Formato inválido. Use JPG, PNG ou WEBP." },
        { status: 400 }
      )
    }

    if (file.size > MAX_SIZE_BYTES) {
      return NextResponse.json(
        { error: "Arquivo muito grande. Máximo de 5MB." },
        { status: 400 }
      )
    }

    const ext = (file.name.split(".").pop() || "jpg").toLowerCase()
    const safeName = sanitizeBaseName(file.name.replace(/\.[^.]+$/, ""))
    const pathname = `pacotes-especiais/${Date.now()}-${safeName}.${ext}`

    const blob = await put(pathname, file, {
      access: "public",
      addRandomSuffix: true,
    })

    return NextResponse.json({ url: blob.url })
  } catch (err) {
    console.error("[admin upload]", err)
    return NextResponse.json(
      { error: "Falha no upload. Verifique o Blob token em produção." },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request) {
  const session = await getAdminSession()
  if (!session) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
  }

  try {
    const body = (await request.json()) as { url?: unknown }
    const url = typeof body.url === "string" ? body.url.trim() : ""

    if (!url) {
      return NextResponse.json({ error: "URL inválida." }, { status: 400 })
    }

    if (!isAllowedBlobUrl(url)) {
      return NextResponse.json({ error: "URL não permitida para exclusão." }, { status: 400 })
    }

    await del(url)
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[admin upload delete]", err)
    return NextResponse.json(
      { error: "Falha ao excluir imagem do Blob." },
      { status: 500 }
    )
  }
}
