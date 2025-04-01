"use client"

import { motion } from "framer-motion"
import { Figma, Code, Palette, Layers, Smartphone, Globe, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FigmaToCode() {
  return (
    <section className="py-24 px-4 relative overflow-hidden" id="figma-to-code">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6 bg-zinc-900/50 border border-zinc-800 rounded-full py-2 px-4 w-fit mx-auto">
            <Figma className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-zinc-300">For UI/UX Designers</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">From Figma to Functional Code</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Transform your Figma designs into production-ready websites and applications with our AI-powered design-to-code technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">How It Works</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-3 bg-zinc-800/50 rounded-lg h-fit">
                    <Figma className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Import Your Design</h4>
                    <p className="text-zinc-400">
                      Connect your Figma account or upload your design files directly to CodeMorph.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-zinc-800/50 rounded-lg h-fit">
                    <Layers className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">AI Analysis</h4>
                    <p className="text-zinc-400">
                      Our AI analyzes your design, identifying components, styles, and interactive elements.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-zinc-800/50 rounded-lg h-fit">
                    <Code className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Code Generation</h4>
                    <p className="text-zinc-400">
                      Generate clean, production-ready code in your preferred framework and programming language.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-zinc-800/50 rounded-lg h-fit">
                    <Globe className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Deploy & Iterate</h4>
                    <p className="text-zinc-400">
                      Deploy your functional application and make iterative updates as your design evolves.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Supported Technologies</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-zinc-800/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-3 text-emerald-400">Frontend Frameworks</h4>
                  <ul className="space-y-2 text-zinc-300">
                    <li>• React / Next.js</li>
                    <li>• Vue / Nuxt.js</li>
                    <li>• Angular</li>
                    <li>• Svelte / SvelteKit</li>
                    <li>• HTML/CSS/JavaScript</li>
                  </ul>
                </div>
                
                <div className="bg-zinc-800/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-3 text-emerald-400">Mobile Development</h4>
                  <ul className="space-y-2 text-zinc-300">
                    <li>• React Native</li>
                    <li>• Flutter</li>
                    <li>• Swift UI</li>
                    <li>• Kotlin / Jetpack Compose</li>
                    <li>• Native Android/iOS</li>
                  </ul>
                </div>
                
                <div className="bg-zinc-800/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-3 text-emerald-400">CSS Frameworks</h4>
                  <ul className="space-y-2 text-zinc-300">
                    <li>• Tailwind CSS</li>
                    <li>• Bootstrap</li>
                    <li>• Material UI</li>
                    <li>• Styled Components</li>
                    <li>• SCSS/SASS</li>
                  </ul>
                </div>
                
                <div className="bg-zinc-800/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-3 text-emerald-400">Design Systems</h4>
                  <ul className="space-y-2 text-zinc-300">
                    <li>• Custom component libraries</li>
                    <li>• Design tokens</li>
                    <li>• Responsive layouts</li>
                    <li>• Accessibility standards</li>
                    <li>• Animation libraries</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <Button
                  asChild
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
                >
                  <Link href="/figma-to-code" className="flex items-center gap-2">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Key Benefits for Designers</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-800/50 rounded-lg p-6">
              <div className="mb-4 p-3 bg-zinc-700/50 rounded-lg w-fit">
                <Palette className="w-6 h-6 text-emerald-400" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Design Fidelity</h4>
              <p className="text-zinc-400">
                Maintain pixel-perfect accuracy between your design and the generated code, preserving your creative vision.
              </p>
            </div>
            
            <div className="bg-zinc-800/50 rounded-lg p-6">
              <div className="mb-4 p-3 bg-zinc-700/50 rounded-lg w-fit">
                <Smartphone className="w-6 h-6 text-emerald-400" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Responsive by Default</h4>
              <p className="text-zinc-400">
                Automatically generate responsive layouts that work beautifully across all devices and screen sizes.
              </p>
            </div>
            
            <div className="bg-zinc-800/50 rounded-lg p-6">
              <div className="mb-4 p-3 bg-zinc-700/50 rounded-lg w-fit">
                <Code className="w-6 h-6 text-emerald-400" />
              </div>
              <h4 className="text-lg font-semibold mb-2">No Coding Required</h4>
              <p className="text-zinc-400">
                Focus on what you do best—designing beautiful interfaces—while CodeMorph handles the technical implementation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
