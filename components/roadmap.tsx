"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Circle, Clock } from "lucide-react"

const roadmapItems = [
  {
    title: "Private Alpha",
    description: "Initial testing with select partners",
    status: "current",
    date: "Q1-Q2 2024",
  },
  {
    title: "Closed Beta",
    description: "Expanded testing with waitlist members",
    status: "upcoming",
    date: "Q3 2025",
  },
  {
    title: "Public Beta",
    description: "Open access with core features",
    status: "upcoming",
    date: "Q4 2025",
  },
  {
    title: "Enterprise Release",
    description: "Full-featured version with enterprise support",
    status: "upcoming",
    date: "Q1 2025",
  },
  {
    title: "API & Integrations",
    description: "Developer API and third-party integrations",
    status: "upcoming",
    date: "Q2 2026",
  },
]

export default function Roadmap() {
  return (
    <section className="py-24 px-4 relative" id="roadmap">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Product Roadmap</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Our development timeline and upcoming features. Join the waitlist to stay updated on our progress.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-zinc-800 rounded-full hidden md:block"></div>

          <div className="space-y-12 relative">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row md:items-center gap-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"}`}>
                  <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-emerald-500/30 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                    <p className="text-zinc-400 mb-3">{item.description}</p>
                    <div className="flex items-center gap-2 text-sm font-medium text-emerald-400 justify-start md:justify-end">
                      <Clock className="w-4 h-4" />
                      {item.date}
                    </div>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                  {item.status === "completed" ? (
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                    </div>
                  ) : item.status === "current" ? (
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center border-2 border-emerald-500 animate-pulse">
                      <Circle className="w-6 h-6 text-emerald-500" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                      <Circle className="w-6 h-6 text-zinc-600" />
                    </div>
                  )}
                </div>

                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:order-2 md:pl-12" : "md:pr-12"}`}>
                  {index % 2 === 0 ? (
                    <div className="h-full flex items-center">
                      <div className="text-zinc-500 text-sm md:text-base">
                        {item.status === "completed" ? (
                          <span className="text-emerald-400 flex items-center gap-2 md:hidden">
                            <CheckCircle2 className="w-4 h-4" /> Completed
                          </span>
                        ) : item.status === "current" ? (
                          <span className="text-emerald-400 flex items-center gap-2 md:hidden">
                            <Circle className="w-4 h-4" /> In Progress
                          </span>
                        ) : (
                          <span className="text-zinc-500 flex items-center gap-2 md:hidden">
                            <Circle className="w-4 h-4" /> Upcoming
                          </span>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="h-full flex items-center">
                      <div className="text-zinc-500 text-sm md:text-base">
                        {item.status === "completed" ? (
                          <span className="text-emerald-400 flex items-center gap-2 md:hidden">
                            <CheckCircle2 className="w-4 h-4" /> Completed
                          </span>
                        ) : item.status === "current" ? (
                          <span className="text-emerald-400 flex items-center gap-2 md:hidden">
                            <Circle className="w-4 h-4" /> In Progress
                          </span>
                        ) : (
                          <span className="text-zinc-500 flex items-center gap-2 md:hidden">
                            <Circle className="w-4 h-4" /> Upcoming
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-4">
              <div className="bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-lg font-medium">
                Current Development: Private Alpha Testing
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

