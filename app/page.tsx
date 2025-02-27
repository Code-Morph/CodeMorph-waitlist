import type { Metadata } from "next"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Engagement from "@/components/engagement"
import Roadmap from "@/components/roadmap"
import Testimonials from "@/components/testimonials"
import Blog from "@/components/blog"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "CodeMorph - AI-Powered Code Transpilation & Optimization",
  description:
    "Join the waitlist for CodeMorph, the revolutionary AI-powered code transpiler and assistant designed to help developers seamlessly convert code between programming languages.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white overflow-hidden">
      <Hero />
      <Features />
      <Engagement />
      <Roadmap />
      <Testimonials />
      {/* <Blog /> */}
      <Footer />
    </main>
  )
}

