"use client"

import PageHeader from "@/components/page-header"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MessagesSquare, MapPin, Phone, Globe, Send, Twitter, Bot, Instagram } from "lucide-react"
import { useState } from "react"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

// export const metadata: Metadata = {
//   title: "Contact - CodeMorph",
//   description: "Get in touch with the CodeMorph team for questions, support, or partnership opportunities.",
// }

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
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
      const response = await fetch("https://codemorph-waitlist-backend.onrender.com/contact-us/", {
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
        subject: "",
        message: "",
      });

      toast({
        title: "Thank you for contacting us!",
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
        title="Contact Us"
        description="Have questions or want to learn more about CodeMorph? We'd love to hear from you."
      />

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-zinc-400 mb-8">
                Whether you have questions about our product, need technical support, or want to explore partnership
                opportunities, our team is here to help.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="p-3 bg-zinc-800/50 rounded-lg h-fit">
                    <Mail className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Email Us</h3>
                    <p className="text-zinc-400">
                      <a href="mailto:hello@codemorph.codes" target='_blank' className="hover:text-emerald-400 transition-colors">
                        hello@codemorph.codes
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-zinc-800/50 rounded-lg h-fit">
                    <Phone className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Call Us</h3>
                    <p className="text-zinc-400">
                      <a href="tel:+2349068937365" target='_blank' className="hover:text-emerald-400 transition-colors">
                        +234 906 893 7365
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-zinc-800/50 rounded-lg h-fit">
                    <MessagesSquare className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Chat With Us</h3>
                    <p className="text-zinc-400">
                      <a href="https://wa.me/2349079889747" target='_blank' className="hover:text-emerald-400 transition-colors">
                        +234 907 988 9747
                      </a>
                    </p>
                  </div>
                </div>

                {/* <div className="flex gap-4">
                  <div className="p-3 bg-zinc-800/50 rounded-lg h-fit">
                    <MapPin className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Visit Us</h3>
                    <p className="text-zinc-400">
                      Lagos, Nigeria                      
                    </p>
                  </div>
                </div> */}

                <div className="flex gap-4">
                  <div className="p-3 bg-zinc-800/50 rounded-lg h-fit">
                    <Globe className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Follow Us</h3>
                    <div className="flex gap-4 mt-2">                     
                      <a href="https://x.com/_CodeMorph" target='_blank' className="text-zinc-400 hover:text-emerald-400 transition-colors">                        
                         <Twitter className="w-6 h-6" />
                      </a>
                      <a href="https://www.instagram.com/_codemorph" target='_blank' className="text-zinc-400 hover:text-emerald-400 transition-colors">                        
                         <Instagram className="w-6 h-6" />
                      </a>
                      <a href="https://www.reddit.com/user/CodeMorph_/" target='_blank' className="text-zinc-400 hover:text-emerald-400 transition-colors">                        
                         <Bot className="w-7 h-7 -mt-0.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald-500/10 rounded-lg">
                    <MessageSquare className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="font-semibold">Live Chat Support</h3>
                </div>
                <p className="text-zinc-400 mb-4">Our support team is available Monday through Friday, 9am-5pm PT.</p>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white">Start Live Chat</Button>
              </div> */}
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-medium">
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
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      name='email'
                      className="bg-zinc-800/50 border-zinc-700"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Select
                    name='subject'
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, subject: value }))}
                    required
                  >
                    <SelectTrigger className="bg-zinc-800/50 border-zinc-700">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="sales">Sales & Pricing</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                      <SelectItem value="careers">Careers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name='message'
                    className="bg-zinc-800/50 border-zinc-700 min-h-[150px]"
                    placeholder="How can we help you?"
                    value={formData.message}
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
                      Sending Message <Send className="w-4 h-4 ml-2" />
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message <Send className="w-4 h-4 ml-2" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

