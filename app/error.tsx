"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 text-destructive mb-6">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-serif font-bold text-foreground mb-2">
          Algo deu errado
        </h1>
        <p className="text-muted-foreground mb-8">
          Ocorreu um erro inesperado. Tente novamente ou volte à página inicial.
        </p>
        <Button onClick={reset} className="bg-primary hover:bg-primary/90">
          Tentar novamente
        </Button>
        <Link href="/" className="block mt-4 text-sm text-primary hover:underline">
          Voltar ao início
        </Link>
      </div>
    </div>
  )
}
