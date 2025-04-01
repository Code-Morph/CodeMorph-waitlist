"use client"; // Add this at the top

import { useState } from "react";
import PageHeader from "@/components/page-header"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Shield, Server, Users, Clock, Check, Building, Globe, Database } from "lucide-react"
import Link from "next/link"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

// export const metadata: Metadata = {
//   title: "Enterprise Solutions - CodeMorph",
//   description: "Enterprise-grade code transformation solutions for large organizations.",
// }

export default function EnterprisePage() {
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

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

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
    <main className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">
      <Toaster />

      <PageHeader
        title="Enterprise Solutions"
        description="Powerful code transformation tools designed for the needs of large organizations."
      />

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Transform Your Legacy Codebase</h2>
              <p className="text-zinc-400 mb-8">
                CodeMorph Enterprise provides powerful tools and services to help large organizations modernize their
                legacy codebases, reduce technical debt, and accelerate digital transformation initiatives.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-3 bg-zinc-800/50 rounded-lg h-fit">
                    <Shield className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Enterprise-Grade Security</h3>
                    <p className="text-zinc-400">
                      On-premises deployment options, SOC 2 compliance, and end-to-end encryption to protect your
                      intellectual property.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-zinc-800/50 rounded-lg h-fit">
                    <Server className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Scalable Infrastructure</h3>
                    <p className="text-zinc-400">
                      Process millions of lines of code with high-performance computing resources dedicated to your
                      organization.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-zinc-800/50 rounded-lg h-fit">
                    <Users className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
                    <p className="text-zinc-400">
                      White-glove onboarding, training, and ongoing support from our team of experts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6">Request Enterprise Information</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input
                      id="fullName"
                      name='fullName'
                      className="bg-zinc-800/50 border-zinc-700"
                      placeholder="Your name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Work Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-zinc-800/50 border-zinc-700"
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="companyName" className="text-sm font-medium">
                      Company
                    </label>
                    <Input
                      id="companyName"
                      name='companyName'
                      className="bg-zinc-800/50 border-zinc-700"
                      placeholder="Company name"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="title" className="text-sm font-medium">
                      Company Size
                    </label>
                    <Input
                      id="companySize"
                      name='companySize'
                      className="bg-zinc-800/50 border-zinc-700"
                      placeholder="1-10 employees"
                      value={formData.companySize}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    How can we help?
                  </label>
                  <Textarea
                    id="useCase"
                    name='useCase'
                    className="bg-zinc-800/50 border-zinc-700 min-h-[120px]"
                    placeholder="Tell us about your code transformation needs..."
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
                      Requesting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Request Information
                    </span>
                  )}
                </Button>

                <p className="text-xs text-zinc-500 text-center">
                  By submitting this form, you agree to our{" "}
                  <Link href="/privacy-policy" className="text-emerald-400 hover:text-emerald-300">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Enterprise Features</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300">
                <div className="mb-4 p-3 bg-zinc-800/50 rounded-lg w-fit">
                  <Building className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">On-Premises Deployment</h3>
                <p className="text-zinc-400 mb-4">
                  Deploy CodeMorph within your own infrastructure for maximum security and control.
                </p>
                <ul className="space-y-2">
                  {[
                    "Run on your own servers",
                    "Integrate with internal systems",
                    "Custom security policies",
                    "Air-gapped environments supported",
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
                  <Globe className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Global Support</h3>
                <p className="text-zinc-400 mb-4">
                  24/7 support and services for enterprise customers around the world.
                </p>
                <ul className="space-y-2">
                  {[
                    "Dedicated account manager",
                    "Technical support team",
                    "Implementation specialists",
                    "Regular business reviews",
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
                  <Database className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Custom AI Models</h3>
                <p className="text-zinc-400 mb-4">
                  Train AI models on your specific codebase for maximum accuracy and efficiency.
                </p>
                <ul className="space-y-2">
                  {[
                    "Domain-specific training",
                    "Custom language support",
                    "Proprietary pattern recognition",
                    "Continuous improvement",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span className="text-zinc-400 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 mb-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Enterprise Success Stories</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-800/50 rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-zinc-700 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-emerald-400">F</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Fortune 500 Financial Institution</h3>
                    <p className="text-zinc-400 text-sm">Legacy COBOL to Java Migration</p>
                  </div>
                </div>
                <p className="text-zinc-300 mb-4">
                  "CodeMorph helped us modernize our 30-year-old COBOL codebase to Java, reducing maintenance costs by
                  65% and enabling cloud migration."
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div className="text-zinc-400">
                    <Clock className="w-4 h-4 inline-block mr-1" />3 month implementation
                  </div>
                  <div className="text-emerald-400">2.5M lines of code processed</div>
                </div>
              </div>

              <div className="bg-zinc-800/50 rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-zinc-700 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-emerald-400">T</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Tech Industry Leader</h3>
                    <p className="text-zinc-400 text-sm">Python 2 to Python 3 Migration</p>
                  </div>
                </div>
                <p className="text-zinc-300 mb-4">
                  "We needed to upgrade our entire codebase from Python 2 to Python 3 before end-of-life. CodeMorph
                  automated 95% of the conversion with minimal manual intervention."
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div className="text-zinc-400">
                    <Clock className="w-4 h-4 inline-block mr-1" />6 week implementation
                  </div>
                  <div className="text-emerald-400">1.8M lines of code processed</div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your Codebase?</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              Contact our enterprise team to discuss your specific needs and learn how CodeMorph can help your
              organization.
            </p>
            <Link href="/contact">
              <Button className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] px-8 py-6">
                Contact Enterprise Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

