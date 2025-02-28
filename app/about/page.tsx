import PageHeader from "@/components/page-header"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Code, Zap, Users, Globe, ArrowRight, Lightbulb, Target, Rocket } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About - CodeMorph",
  description: "Learn about CodeMorph's mission to revolutionize code transformation with AI.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">
      <PageHeader
        title="About CodeMorph"
        description="Our mission is to revolutionize code transformation by providing a tool that eliminates the time-consuming and error-prone process of manually rewriting codebases."
      />

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-zinc-400 mb-4">
                CodeMorph was founded in 2023 by a  of developers who experienced firsthand the challenges of
                migrating large codebases between programming languages. After spending months manually converting a
                legacy application, they realized there had to be a better way.
              </p>
              <p className="text-zinc-400 mb-4">
                Drawing on their expertise in artificial intelligence and software development, they created an
                AI-powered solution that could understand code at a deeper level than simple syntax translation.
                CodeMorph was born from the vision that code transformation should be intelligent, context-aware, and
                efficient.
              </p>
              <p className="text-zinc-400 mb-8">
                Today, CodeMorph is growing rapidly, with a team of AI researchers, software engineers, and industry
                experts working together to revolutionize how developers approach code migration and modernization.
              </p>

              <Link href="/contact">
                <Button className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-all duration-300">
                  Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="space-y-8">
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                <div className="mb-4 p-3 bg-zinc-800/50 rounded-lg w-fit">
                  <Lightbulb className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-zinc-400">
                  To revolutionize code transformation by providing a tool that eliminates the time-consuming and
                  error-prone process of manually rewriting codebases, enabling developers to focus on innovation rather
                  than translation.
                </p>
              </div>

              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                <div className="mb-4 p-3 bg-zinc-800/50 rounded-lg w-fit">
                  <Target className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-zinc-400">
                  CodeMorph aims to become the default AI-driven code migration and refactoring tool for developers and
                  enterprises, ensuring seamless codebase adaptation across evolving tech stacks.
                </p>
              </div>

              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                <div className="mb-4 p-3 bg-zinc-800/50 rounded-lg w-fit">
                  <Rocket className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                <ul className="space-y-2 text-zinc-400">
                  <li>• Innovation: Pushing the boundaries of what's possible with AI</li>
                  <li>• Quality: Delivering accurate, reliable code transformations</li>
                  <li>• Accessibility: Making advanced technology available to all developers</li>
                  <li>• Community: Building and supporting the developer ecosystem</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Why CodeMorph Exists</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                <div className="mb-4 p-3 bg-zinc-800/50 rounded-lg w-fit">
                  <Code className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Technical Debt</h3>
                <p className="text-zinc-400">
                  Legacy codebases often accumulate technical debt, making them difficult to maintain and extend.
                  CodeMorph helps organizations modernize their code and reduce technical debt.
                </p>
              </div>

              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                <div className="mb-4 p-3 bg-zinc-800/50 rounded-lg w-fit">
                  <Zap className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Evolving Technology</h3>
                <p className="text-zinc-400">
                  Programming languages and frameworks evolve rapidly. CodeMorph enables developers to keep pace with
                  technological change without starting from scratch.
                </p>
              </div>

              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                <div className="mb-4 p-3 bg-zinc-800/50 rounded-lg w-fit">
                  <Users className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Developer Productivity</h3>
                <p className="text-zinc-400">
                  Manual code translation is time-consuming and error-prone. CodeMorph frees developers to focus on
                  creating new value rather than rewriting existing functionality.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 mb-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Team</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  name: "Alex Chen",
                  role: "CEO & Co-Founder",
                  bio: "Former ML engineer at Google with expertise in NLP and code analysis.",
                  image: "/placeholder.svg?height=120&width=120",
                },
                {
                  name: "Sarah Johnson",
                  role: "CTO & Co-Founder",
                  bio: "20+ years of software development experience across multiple languages and platforms.",
                  image: "/placeholder.svg?height=120&width=120",
                },
                {
                  name: "Michael Rodriguez",
                  role: "Head of AI Research",
                  bio: "PhD in Computer Science with focus on machine learning for code understanding.",
                  image: "/placeholder.svg?height=120&width=120",
                },
                {
                  name: "Emily Zhang",
                  role: "VP of Product",
                  bio: "Product leader with experience at Microsoft and Amazon building developer tools.",
                  image: "/placeholder.svg?height=120&width=120",
                },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-24 h-24 rounded-full bg-zinc-800 mx-auto mb-4 overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-emerald-400 text-sm mb-2">{member.role}</p>
                  <p className="text-zinc-400 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div> */}

          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              We're building the future of code transformation and looking for passionate individuals to join our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-all duration-300"
                asChild
              >
                <Link href="/contact">
                  Join Our Team <Users className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10" asChild>
                <Link href="/">
                  Try CodeMorph <Globe className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

