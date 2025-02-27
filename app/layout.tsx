import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import Logo from "@/components/ui/logo"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CodeMorph - AI-Powered Code Transpilation & Optimization",
  description:
    "Join the waitlist for CodeMorph, the revolutionary AI-powered code transpiler and assistant designed to help developers seamlessly convert code between programming languages.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-zinc-800">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Logo />
              <span className="font-bold text-xl">CodeMorph</span>
            </Link>
          </div>
        </header> */}
        <div className="">{children}</div>
      </body>
    </html>
  )
}



import './globals.css'