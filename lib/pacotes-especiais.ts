import path from "node:path"
import fs from "node:fs"

export interface PacoteEspecial {
  id: string
  titulo: string
  datas: string
  descricao: string
  ativo: boolean
  ordem: number
  /** URLs ou caminhos das imagens (ex: /images/reveillon.jpg). Várias = carrossel. */
  imagens?: string[]
}

const LOCAL_DATA_FILE = path.join(process.cwd(), "data", "pacotes-especiais.json")
const TMP_DATA_FILE = path.join("/tmp", "data", "pacotes-especiais.json")
const KV_KEY = "pacotes-especiais"

function isVercelRuntime(): boolean {
  return process.env.VERCEL === "1"
}

function getWritableDataFile(): string {
  return isVercelRuntime() ? TMP_DATA_FILE : LOCAL_DATA_FILE
}

function hasKvConfig(): boolean {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN)
}

async function readFromKv(): Promise<PacoteEspecial[] | null> {
  if (!hasKvConfig()) return null
  try {
    const url = `${process.env.KV_REST_API_URL}/get/${KV_KEY}`
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
      },
      cache: "no-store",
    })
    if (!res.ok) return []

    const payload = (await res.json()) as { result?: unknown }
    if (payload.result == null) return []

    if (Array.isArray(payload.result)) {
      return payload.result as PacoteEspecial[]
    }

    if (typeof payload.result === "string") {
      const parsed = JSON.parse(payload.result) as unknown
      return Array.isArray(parsed) ? (parsed as PacoteEspecial[]) : []
    }

    return []
  } catch {
    return []
  }
}

async function saveToKv(pacotes: PacoteEspecial[]): Promise<boolean> {
  if (!hasKvConfig()) return false
  try {
    const encoded = encodeURIComponent(JSON.stringify(pacotes))
    const url = `${process.env.KV_REST_API_URL}/set/${KV_KEY}/${encoded}`
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
      },
      cache: "no-store",
    })
    return res.ok
  } catch {
    return false
  }
}

export async function getAllPacotesEspeciais(): Promise<PacoteEspecial[]> {
  const kvData = await readFromKv()
  if (kvData !== null) {
    return kvData
  }

  const dataFile = getWritableDataFile()
  try {
    const raw = fs.readFileSync(dataFile, "utf-8")
    const data = JSON.parse(raw) as PacoteEspecial[]
    return Array.isArray(data) ? data : []
  } catch {
    return []
  }
}

export async function getPacotesEspeciais(): Promise<PacoteEspecial[]> {
  const data = await getAllPacotesEspeciais()
  return data.filter((p) => p.ativo).sort((a, b) => (a.ordem ?? 0) - (b.ordem ?? 0))
}

export async function savePacotesEspeciais(pacotes: PacoteEspecial[]): Promise<void> {
  const savedInKv = await saveToKv(pacotes)
  if (savedInKv) return

  const dataFile = getWritableDataFile()
  const dir = path.dirname(dataFile)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
  fs.writeFileSync(dataFile, JSON.stringify(pacotes, null, 2), "utf-8")
}
