import PageHeader from "@/components/page-header"
import type { Metadata } from "next"
import { Code, GitBranch, Zap, RefreshCw, Database, Check, Cpu, Lock, Figma, Globe, Layers, Palette, Smartphone } from "lucide-react"

export const metadata: Metadata = {
  title: "Features - CodeMorph",
  description: "Explore the powerful features of CodeMorph's AI-powered code transpilation platform.",
}

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">
      <PageHeader
        title="Features"
        description="Discover how CodeMorph's AI-powered platform transforms your code workflow."
      />

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">AI-Powered Code Translation</h2>
              <p className="text-zinc-400 mb-6">
                CodeMorph leverages advanced machine learning algorithms to understand the context and structure of your
                code, enabling high-accuracy translations between programming languages.
              </p>
              <ul className="space-y-3">
                {[
                  "Contextual understanding of code semantics",
                  "Preservation of logic and structure",
                  "Support for 20+ programming languages",
                  "Intelligent handling of language-specific idioms",
                  "Automatic documentation translation",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 h-full ">
              <div className="bg-black/50 rounded-lg p-4 font-mono text-sm text-zinc-300 mb-4 overflow-x-auto">
                <div className="text-zinc-500 mb-2">// Original Python code</div>
                <div className="whitespace-pre-wrap">
                  <pre className="text-emerald-400 whitespace-pre-wrap break-all">
                    {`def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

result = [fibonacci(i) for i in range(10)]
print(f"Fibonacci sequence: {result}")`}
                  </pre>
                </div>
              </div>
              <div className="flex items-center justify-center my-4">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <RefreshCw className="w-4 h-4 text-emerald-500" />
                </div>
                <div className="h-px w-16 bg-zinc-800"></div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium">
                  AI Translation
                </div>
                <div className="h-px w-16 bg-zinc-800"></div>
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Code className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
              <div className="bg-black/50 rounded-lg p-4 font-mono text-sm text-zinc-300">
                <div className="text-zinc-500 mb-2">// Translated JavaScript code</div>
                <div className="overflow-x-auto">
                  <pre className="text-emerald-400 whitespace-pre-wrap break-all">
                    {`function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n-1) + fibonacci(n-2);
  }
}

const result = Array.from({ length: 10 }, (_, i) => fibonacci(i));
console.log(\`Fibonacci sequence: \${result}\`);`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Figma to Code Conversion</h2>
              <p className="text-zinc-400 mb-6">
                Transform your Figma designs into functional code with our AI-powered design-to-code technology, maintaining pixel-perfect accuracy and responsive layouts.
              </p>
              <ul className="space-y-3">
                {[
                  "Pixel-perfect design fidelity",
                  "Automatic responsive layouts",
                  "Cross-platform code generation",
                  "Component-based architecture",
                  "Style and animation preservation",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 h-full">
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-black/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Figma className="w-6 h-6 text-emerald-400" />
                      <span className="text-zinc-300 font-medium">Figma Design</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Layers className="w-4 h-4 text-emerald-500" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-zinc-800/50 rounded-lg p-4">
                      <h4 className="font-medium text-zinc-300 mb-2">Components</h4>
                      <ul className="space-y-1 text-zinc-500 text-sm">
                        <li>• Buttons</li>
                        <li>• Cards</li>
                        <li>• Forms</li>
                        <li>• Navigation</li>
                      </ul>
                    </div>
                    <div className="bg-zinc-800/50 rounded-lg p-4">
                      <h4 className="font-medium text-zinc-300 mb-2">Layout</h4>
                      <ul className="space-y-1 text-zinc-500 text-sm">
                        <li>• Grid</li>
                        <li>• Flexbox</li>
                        <li>• Responsive</li>
                        <li>• Breakpoints</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center my-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <RefreshCw className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="h-px w-16 bg-zinc-800"></div>
                  <div className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium">
                    AI Conversion
                  </div>
                  <div className="h-px w-16 bg-zinc-800"></div>
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Code className="w-4 h-4 text-emerald-500" />
                  </div>
                </div>

                <div className="bg-black/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Code className="w-6 h-6 text-emerald-400" />
                      <span className="text-zinc-300 font-medium">Generated Code</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Smartphone className="w-4 h-4 text-emerald-500" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-zinc-800/50 rounded-lg p-4">
                      <h4 className="font-medium text-zinc-300 mb-2">Features</h4>
                      <ul className="space-y-1 text-zinc-500 text-sm">
                        <li>• Responsive</li>
                        <li>• Interactive</li>
                        <li>• Optimized</li>
                        <li>• Cross-platform</li>
                      </ul>
                    </div>
                    <div className="bg-zinc-800/50 rounded-lg p-4">
                      <h4 className="font-medium text-zinc-300 mb-2">Tech Stack</h4>
                      <ul className="space-y-1 text-zinc-500 text-sm">
                        <li>• React/Next.js</li>
                        <li>• Vue/Nuxt.js</li>
                        <li>• Svelte</li>
                        <li>• Native</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300">
              <div className="mb-4 p-3 bg-zinc-800/50 rounded-lg w-fit">
                <GitBranch className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Full-Project Migration</h3>
              <p className="text-zinc-400 mb-4">
                Not just snippets—CodeMorph handles entire repositories and maintains project structure.
              </p>
              <ul className="space-y-2">
                {[
                  "Preserves folder structure",
                  "Handles dependencies",
                  "Migrates configuration files",
                  "Processes multiple files simultaneously",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span className="text-zinc-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300">
              <div className="mb-4 p-3 bg-zinc-800/50 rounded-lg w-fit">
                <RefreshCw className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Context-Aware Refactoring</h3>
              <p className="text-zinc-400 mb-4">
                Ensures the translated code follows best practices in the target language.
              </p>
              <ul className="space-y-2">
                {[
                  "Idiomatic code generation",
                  "Modern syntax patterns",
                  "Language-specific optimizations",
                  "Consistent style enforcement",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span className="text-zinc-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300">
              <div className="mb-4 p-3 bg-zinc-800/50 rounded-lg w-fit">
                <Figma className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Figma to Code</h3>
              <p className="text-zinc-400 mb-4">
                Import designs from Figma and transform them into functional websites or apps in any programming language.
              </p>
              <ul className="space-y-2">
                {[
                  "Pixel-perfect design fidelity",
                  "Automatic responsive layouts",
                  "Cross-platform code generation",
                  "No coding required",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span className="text-zinc-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
              <div className="mb-6 p-3 bg-zinc-800/50 rounded-lg w-fit">
                <Database className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">SaaS & API Integration</h3>
              <p className="text-zinc-400 mb-6">
                Available as a web app, CLI tool, and API for seamless developer integration.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-zinc-800/50 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Web Interface</h4>
                  <p className="text-zinc-400 text-sm">Intuitive dashboard for managing projects and translations.</p>
                </div>
                <div className="bg-zinc-800/50 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">CLI Tool</h4>
                  <p className="text-zinc-400 text-sm">Command-line interface for integration with build systems.</p>
                </div>
                <div className="bg-zinc-800/50 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">REST API</h4>
                  <p className="text-zinc-400 text-sm">Comprehensive API for custom workflow integration.</p>
                </div>
                <div className="bg-zinc-800/50 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Webhooks</h4>
                  <p className="text-zinc-400 text-sm">Event-driven notifications for automated workflows.</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
              <div className="mb-6 p-3 bg-zinc-800/50 rounded-lg w-fit">
                <Lock className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Enterprise-Grade Security</h3>
              <p className="text-zinc-400 mb-6">
                Robust security measures to protect your intellectual property and code assets.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-500/10 rounded-lg">
                    <Cpu className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Advanced Encryption</h4>
                    <p className="text-zinc-400 text-sm">End-to-end encryption for all code and design transfers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-500/10 rounded-lg">
                    <Globe className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Global Compliance</h4>
                    <p className="text-zinc-400 text-sm">Meets GDPR, CCPA, and other global data protection standards.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
