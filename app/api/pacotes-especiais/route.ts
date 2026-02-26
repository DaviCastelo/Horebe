import { NextResponse } from "next/server"
import { getPacotesEspeciais } from "@/lib/pacotes-especiais"

export async function GET() {
  try {
    const pacotes = getPacotesEspeciais()
    return NextResponse.json(pacotes)
  } catch (err) {
    console.error("[pacotes-especiais]", err)
    return NextResponse.json([], { status: 200 })
  }
}
