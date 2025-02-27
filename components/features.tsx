"use client"

import { motion } from "framer-motion"
import { Code, GitBranch, Zap, RefreshCw, Database, Workflow } from "lucide-react"

const features = [
  {
    icon: <Code className="w-6 h-6 text-emerald-400" />,
    title: "AI-Powered Code Translation",
    description: "Converts code between different programming languages with syntax accuracy and context awareness.",
  },
  {
    icon: <GitBranch className="w-6 h-6 text-emerald-400" />,
    title: "Full-Project Migration",
    description: "Not just snippets—CodeMorph handles entire repositories and maintains project structure.",
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-emerald-400" />,
    title: "Context-Aware Refactoring",
    description: "Ensures the translated code follows best practices in the target language.",
  },
  {
    icon: <Zap className="w-6 h-6 text-emerald-400" />,
    title: "Optimization & Debugging",
    description: "Improves performance and suggests fixes in the migrated code automatically.",
  },
  {
    icon: <Database className="w-6 h-6 text-emerald-400" />,
    title: "SaaS & API Integration",
    description: "Available as a web app, CLI tool, and API for seamless developer integration.",
  },
  {
    icon: <Workflow className="w-6 h-6 text-emerald-400" />,
    title: "Version Control Compatibility",
    description: "Works seamlessly with GitHub, GitLab, and Bitbucket for continuous integration.",
  },
]

export default function Features() {
  return (
    <section className="py-24 px-4 relative overflow-hidden" id="features">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Revolutionize Your Code Workflow</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            CodeMorph leverages cutting-edge AI to transform how developers migrate, refactor, and optimize code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(16, 185, 129, 0.2)" }}
            >
              <div className="mb-4 p-3 bg-zinc-800/50 rounded-lg w-fit group-hover:bg-emerald-500/10 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-zinc-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

