"use client"

import { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, LogOut, Plus, Trash2, Save, ArrowLeft, Eye, EyeOff } from "lucide-react"

export interface PacoteEspecial {
  id: string
  titulo: string
  datas: string
  descricao: string
  ativo: boolean
  ordem: number
}

export default function AdminPage() {
  const router = useRouter()
  const [auth, setAuth] = useState<boolean | null>(null)
  const [password, setPassword] = useState("")
  const [loginError, setLoginError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(true)
  const [pacotes, setPacotes] = useState<PacoteEspecial[]>([])
  const [saving, setSaving] = useState(false)
  const [saveMessage, setSaveMessage] = useState("")

  const checkAuth = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/me", { credentials: "include" })
      setAuth(res.ok)
      if (res.ok) {
        const dataRes = await fetch("/api/admin/pacotes-especiais", {
          credentials: "include",
        })
        if (dataRes.ok) {
          const data = await dataRes.json()
          setPacotes(Array.isArray(data) ? data : [])
        }
      }
    } catch {
      setAuth(false)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoginError("")
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: password.trim() }),
        credentials: "include",
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setLoginError(data.error || "Senha incorreta")
        return
      }
      setPassword("")
      await checkAuth()
    } catch {
      setLoginError("Erro ao conectar. Tente novamente.")
    }
  }

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST", credentials: "include" })
    setAuth(false)
    setPacotes([])
    router.refresh()
  }

  const addPacote = () => {
    const id = `pacote-${Date.now()}`
    setPacotes((prev) => [
      ...prev,
      { id, titulo: "", datas: "", descricao: "", ativo: true, ordem: prev.length + 1 },
    ])
  }

  const updatePacote = (id: string, field: keyof PacoteEspecial, value: string | boolean | number) => {
    setPacotes((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    )
  }

  const removePacote = (id: string) => {
    setPacotes((prev) => prev.filter((p) => p.id !== id))
  }

  const handleSave = async () => {
    setSaving(true)
    setSaveMessage("")
    try {
      const res = await fetch("/api/admin/pacotes-especiais", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pacotes),
        credentials: "include",
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setSaveMessage(data.error || "Erro ao salvar")
        return
      }
      setSaveMessage("Salvo com sucesso!")
      setTimeout(() => setSaveMessage(""), 3000)
    } catch {
      setSaveMessage("Erro ao salvar. Tente novamente.")
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted">
        <p className="text-muted-foreground">Carregando...</p>
      </div>
    )
  }

  if (!auth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-6 h-6" />
              Área Admin
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="password">Senha</Label>
                <div className="relative mt-1">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Digite a senha"
                    className="pr-10"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1 rounded"
                    aria-label={showPassword ? "Ocultar senha" : "Exibir senha"}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
              {loginError && (
                <p className="text-sm text-destructive">{loginError}</p>
              )}
              <Button type="submit" className="w-full">
                Entrar
              </Button>
            </form>
            <Link
              href="/"
              className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao site
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-muted py-12 px-4">
      <div className="container max-w-3xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Link>
            <h1 className="text-2xl font-serif font-bold flex items-center gap-2">
              <Calendar className="w-7 h-7" />
              Datas Especiais e Pacotes
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-1" />
              Sair
            </Button>
            <Button onClick={handleSave} disabled={saving}>
              <Save className="w-4 h-4 mr-1" />
              {saving ? "Salvando…" : "Salvar"}
            </Button>
          </div>
        </div>

        {saveMessage && (
          <p
            className={`mb-4 text-sm ${
              saveMessage.startsWith("Erro") ? "text-destructive" : "text-green-600"
            }`}
          >
            {saveMessage}
          </p>
        )}

        <p className="text-muted-foreground text-sm mb-6">
          Edite os pacotes de datas especiais (Réveillon, Carnaval, Semana Santa, feriados etc.).
          Itens com &quot;Ativo&quot; marcado aparecem na página inicial.
        </p>

        <div className="space-y-4">
          {pacotes.map((p) => (
            <Card key={p.id}>
              <CardContent className="pt-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label className="text-xs">Título</Label>
                    <Input
                      value={p.titulo}
                      onChange={(e) => updatePacote(p.id, "titulo", e.target.value)}
                      placeholder="Ex: Réveillon"
                    />
                  </div>
                  <div>
                    <Label className="text-xs">Datas</Label>
                    <Input
                      value={p.datas}
                      onChange={(e) => updatePacote(p.id, "datas", e.target.value)}
                      placeholder="Ex: 31/12 a 01/01"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <Label className="text-xs">Descrição</Label>
                  <Input
                    value={p.descricao}
                    onChange={(e) => updatePacote(p.id, "descricao", e.target.value)}
                    placeholder="Breve descrição do pacote"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={p.ativo}
                      onChange={(e) => updatePacote(p.id, "ativo", e.target.checked)}
                      className="rounded"
                    />
                    Ativo (exibir no site)
                  </label>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removePacote(p.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button variant="outline" className="mt-6 w-full" onClick={addPacote}>
          <Plus className="w-4 h-4 mr-2" />
          Adicionar pacote
        </Button>
      </div>
    </div>
  )
}
