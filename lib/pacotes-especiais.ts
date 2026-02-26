import path from "path"
import fs from "fs"

export interface PacoteEspecial {
  id: string
  titulo: string
  datas: string
  descricao: string
  ativo: boolean
  ordem: number
}

const DATA_FILE = path.join(process.cwd(), "data", "pacotes-especiais.json")

export function getAllPacotesEspeciais(): PacoteEspecial[] {
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf-8")
    const data = JSON.parse(raw) as PacoteEspecial[]
    return Array.isArray(data) ? data : []
  } catch {
    return []
  }
}

export function getPacotesEspeciais(): PacoteEspecial[] {
  const data = getAllPacotesEspeciais()
  return data.filter((p) => p.ativo).sort((a, b) => (a.ordem ?? 0) - (b.ordem ?? 0))
}

export function savePacotesEspeciais(pacotes: PacoteEspecial[]): void {
  const dir = path.dirname(DATA_FILE)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
  fs.writeFileSync(DATA_FILE, JSON.stringify(pacotes, null, 2), "utf-8")
}
