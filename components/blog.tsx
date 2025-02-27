"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    title: "The Future of Code Migration with AI",
    excerpt:
      "How artificial intelligence is revolutionizing the way developers approach code transpilation and migration.",
    date: "May 15, 2023",
    image: "/placeholder.svg?height=200&width=400",
    slug: "#",
  },
  {
    title: "5 Ways CodeMorph Optimizes Legacy Code",
    excerpt:
      "Discover how our AI-powered platform can breathe new life into your outdated codebase with minimal effort.",
    date: "April 28, 2023",
    image: "/placeholder.svg?height=200&width=400",
    slug: "#",
  },
  {
    title: "Case Study: Migrating a 500K LOC Project",
    excerpt: "How one enterprise team used CodeMorph to migrate their massive Java codebase to modern TypeScript.",
    date: "April 10, 2023",
    image: "/placeholder.svg?height=200&width=400",
    slug: "#",
  },
]

export default function Blog() {
  return (
    <section className="py-24 px-4 relative" id="blog">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Updates</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Stay informed about CodeMorph's development and learn about the latest in AI-powered code transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 overflow-hidden h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 flex-grow">
                  <div className="flex items-center gap-2 text-sm text-zinc-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{post.title}</h3>
                  <p className="text-zinc-400">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link
                    href={post.slug}
                    className="text-emerald-400 font-medium flex items-center gap-2 hover:text-emerald-300 transition-colors"
                  >
                    Read more <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

