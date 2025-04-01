"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { ArrowRight, Github, Linkedin, Twitter, Bot, Instagram } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Logo from "@/components/ui/logo"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
  
    setIsSubmitting(true);
  
    try {
      const response = await fetch("https://codemorph-waitlist-backend.onrender.com/userWaitlist/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
  
      setEmail(""); // Reset email input
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll be in touch soon!",
      });
  
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="pt-24 pb-12 px-4 relative">
      <Toaster />

      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <Logo size="large" />
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-400">
                CodeMorph
              </h3>
            </div>
            <p className="text-zinc-400 mb-6 max-w-md">
              AI-powered code transpilation and optimization platform. Transform your codebase with the power of
              artificial intelligence.
            </p>

            <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
              <Input
                type="email"
                placeholder="Join our waiting list"
                className="bg-zinc-800/50 border-zinc-700"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" className="bg-emerald-600 hover:bg-emerald-500 text-white" disabled={isSubmitting}>
                {isSubmitting ? (
                  <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/features" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                  Enterprise
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                  API
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                  About
                </Link>
              </li>
              {/* <li>
                <Link href="/blog" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                  Blog
                </Link>
              </li> */}
              {/* <li>
                <Link href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                  Careers
                </Link>
              </li> */}
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-zinc-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} CodeMorph. All rights reserved.
          </p>

          <div className="flex gap-4">
            <Link href="https://x.com/_CodeMorph" target='_blank' className="text-zinc-400 hover:text-emerald-400 transition-colors">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://www.instagram.com/_codemorph" target='_blank' className="text-zinc-400 hover:text-emerald-400 transition-colors">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://www.reddit.com/user/CodeMorph_/" target='_blank' className="text-zinc-400 hover:text-emerald-400 transition-colors">
              <Bot className="w-5 h-5" />
              <span className="sr-only">Reddit</span>
            </Link>
            {/* 
            <Link href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link> */}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

