import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
})

export const metadata: Metadata = {
  title: "Estância Monte Horebe – Pousada em Mulungu-CE",
  description:
    "Seu refúgio na serra cearense. Natureza, conforto e tranquilidade em Mulungu, próximo a Guaramiranga. Café da manhã incluso.",
  keywords: "pousada, Mulungu, Ceará, Guaramiranga, serra, natureza, hospedagem, café da manhã",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="w-full">
      <body className={`${playfair.variable} ${lato.variable} font-sans antialiased w-full min-w-0 overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
