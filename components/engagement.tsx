"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { MessageSquare, Users, Share2 } from "lucide-react"

export default function Engagement() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    companySize: "",
    useCase: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

   // Handle text input changes
   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle radio button change
  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, companySize: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await fetch("https://codemorph-waitlist-backend.onrender.com/enterpriseWaitlist/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }  
  
      setFormData({
        fullName: "",
        email: "",
        companyName: "",
        companySize: "",
        useCase: "",
      });

      toast({
        title: "Thanks for your interest!",
        description: "We've received your submission and will be in touch soon.",
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
    <section className="py-24 px-4 relative" id="engagement">
      <Toaster />

      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How Can AI Optimize Your Workflow?</h2>
            <p className="text-zinc-400 mb-8">
              Tell us about your code transformation needs and get prioritized access to CodeMorph. Our AI-powered
              platform is designed to solve your specific challenges.
            </p>

            <div className="space-y-8">
              <motion.div
                className="flex gap-4 items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="p-3 bg-zinc-800/50 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Join Our Community</h3>
                  <p className="text-zinc-400">
                    Connect with like-minded developers and get early access to new features.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-4 items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="p-3 bg-zinc-800/50 rounded-lg">
                  <Users className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Enterprise Solutions</h3>
                  <p className="text-zinc-400">
                    Custom migration services for businesses modernizing legacy applications.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-4 items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="p-3 bg-zinc-800/50 rounded-lg">
                  <Share2 className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Referral Program</h3>
                  <p className="text-zinc-400">Invite others and get priority access to our beta program.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Get Priority Access</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="Your name"
                  className="bg-zinc-800/50 border-zinc-700"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-zinc-800/50 border-zinc-700"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Company Name</Label>
                <Input
                  id="companyName"
                  name="companyName"
                  type="text"
                  placeholder="Company Name"
                  className="bg-zinc-800/50 border-zinc-700"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-3">
                <Label>Company Size</Label>
                <RadioGroup value={formData.companySize} onValueChange={handleRadioChange}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1-10" id="r1" className="border-emerald-500 text-emerald-500" />
                    <Label htmlFor="r1" className="font-normal">
                      1-10 employees
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="11-50" id="r2" className="border-emerald-500 text-emerald-500" />
                    <Label htmlFor="r2" className="font-normal">
                      11-50 employees
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="51-200" id="r3" className="border-emerald-500 text-emerald-500" />
                    <Label htmlFor="r3" className="font-normal">
                      51-200 employees
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="201+" id="r4" className="border-emerald-500 text-emerald-500" />
                    <Label htmlFor="r4" className="font-normal">
                      201+ employees
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="useCase">How would you use CodeMorph?</Label>
                <Textarea
                  id="useCase"
                  name="useCase"
                  placeholder="Tell us about your code transformation needs..."
                  className="bg-zinc-800/50 border-zinc-700 min-h-[100px]"
                  value={formData.useCase}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                  </span>
                ) : (
                  "Submit & Get Priority Access"
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

