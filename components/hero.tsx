"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { motion } from "framer-motion"
import { ArrowRight, Zap } from "lucide-react"

export default function Hero() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // if (!email || !email.includes("@")) {
    //   toast({
    //     title: "Invalid email",
    //     description: "Please enter a valid email address.",
    //     variant: "destructive",
    //   });
    //   return;
    // }

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
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      <Toaster />

      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Code particles */}
      <div className="absolute inset-0 z-0 opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-emerald-500 text-opacity-30 font-mono text-sm"
            initial={{
              x: Math.random() * 100 - 50 + "%",
              y: -20,
              opacity: 0,
            }}
            animate={{
              y: "120vh",
              opacity: [0, 1, 0],
              x: `calc(${Math.random() * 100 - 50 + "%"} + ${Math.sin(i) * 100}px)`,
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          >
            {
              ["const", "async", "function", "import", "export", "class", "=>", "await", "</>", "[]", "{}"][
              Math.floor(Math.random() * 11)
              ]
            }
          </motion.div>
        ))}
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="flex items-center justify-center gap-2 mb-6 bg-zinc-900/50 border border-zinc-800 rounded-full py-2 px-4 w-fit mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Zap className="w-4 h-4 text-emerald-400" />
          <span className="text-sm font-medium text-zinc-300">Join our exclusive beta program</span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          CodeMorph – The Future of AI-Driven Code Transformation
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-zinc-400 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Join the waitlist to be among the first to experience the next evolution of AI-powered code transpilation and
          optimization.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 h-12"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button
            type="submit"
            className="h-12 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Processing...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Join Waitlist <ArrowRight className="w-4 h-4" />
              </span>
            )}
          </Button>
        </motion.form>

        <motion.div
          className="mt-4 text-sm text-zinc-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Be the first to experience the future of code transformation
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-1 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        <div className="flex flex-col items-center gap-2 text-zinc-500">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-5 h-9 border-2 border-zinc-700 rounded-full flex justify-center pt-1">
            <motion.div
              className="w-1 h-1.5 bg-emerald-500 rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

