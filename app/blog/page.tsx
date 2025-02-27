import PageHeader from "@/components/page-header"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowRight, Calendar, Search, Tag } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog - CodeMorph",
  description: "Latest news, updates, and insights from the CodeMorph team.",
}

const blogPosts = [
  {
    title: "The Future of Code Migration with AI",
    excerpt:
      "How artificial intelligence is revolutionizing the way developers approach code transpilation and migration.",
    date: "May 15, 2023",
    image: "/placeholder.svg?height=200&width=400",
    slug: "#",
    tags: ["AI", "Code Migration"],
  },
  {
    title: "5 Ways CodeMorph Optimizes Legacy Code",
    excerpt:
      "Discover how our AI-powered platform can breathe new life into your outdated codebase with minimal effort.",
    date: "April 28, 2023",
    image: "/placeholder.svg?height=200&width=400",
    slug: "#",
    tags: ["Legacy Code", "Optimization"],
  },
  {
    title: "Case Study: Migrating a 500K LOC Project",
    excerpt: "How one enterprise team used CodeMorph to migrate their massive Java codebase to modern TypeScript.",
    date: "April 10, 2023",
    image: "/placeholder.svg?height=200&width=400",
    slug: "#",
    tags: ["Case Study", "Java", "TypeScript"],
  },
  {
    title: "Understanding Context-Aware Code Translation",
    excerpt: "A deep dive into how CodeMorph's AI understands code semantics beyond simple syntax translation.",
    date: "March 22, 2023",
    image: "/placeholder.svg?height=200&width=400",
    slug: "#",
    tags: ["AI", "Machine Learning"],
  },
  {
    title: "The True Cost of Manual Code Migration",
    excerpt:
      "Analyzing the hidden costs, risks, and opportunity losses associated with manual code translation projects.",
    date: "March 5, 2023",
    image: "/placeholder.svg?height=200&width=400",
    slug: "#",
    tags: ["Business", "ROI"],
  },
  {
    title: "Introducing CodeMorph: Our Journey",
    excerpt: "The story behind CodeMorph and our mission to revolutionize code transformation with AI.",
    date: "February 15, 2023",
    image: "/placeholder.svg?height=200&width=400",
    slug: "#",
    tags: ["Company News"],
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">
      <PageHeader title="Blog" description="Latest news, updates, and insights from the CodeMorph team." />

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" className="border-zinc-700 hover:border-emerald-500 hover:bg-emerald-500/10">
                All Posts
              </Button>
              <Button variant="ghost">Product Updates</Button>
              <Button variant="ghost">Tutorials</Button>
              <Button variant="ghost">Case Studies</Button>
              <Button variant="ghost">Industry Insights</Button>
            </div>

            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500 w-4 h-4" />
              <Input placeholder="Search articles..." className="pl-10 bg-zinc-800/50 border-zinc-700 w-full md:w-64" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 overflow-hidden h-full flex flex-col"
              >
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
                  <p className="text-zinc-400 mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <div
                        key={tagIndex}
                        className="flex items-center gap-1 text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded-full"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </div>
                    ))}
                  </div>
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
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="border-zinc-700 hover:border-emerald-500 hover:bg-emerald-500/10">
              Load More Articles
            </Button>
          </div>

          <div className="mt-24 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
              Stay updated with the latest news, product updates, and insights from the CodeMorph team.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="bg-zinc-800/50 border-zinc-700" />
              <Button className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-all duration-300">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

