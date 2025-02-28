import PageHeader from "@/components/page-header"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MessageSquare, MapPin, Phone, Globe, Send, Bot } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact - CodeMorph",
  description: "Get in touch with the CodeMorph team for questions, support, or partnership opportunities.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">
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
                      <a href="mailto:codemorph01@gmail.com" className="hover:text-emerald-400 transition-colors">
                        codemorph01@gmail.com
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
                      <a href="tel:+2349079889747" className="hover:text-emerald-400 transition-colors">
                        +234 907 9889 747
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-zinc-800/50 rounded-lg h-fit">
                    <MapPin className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Visit Us</h3>
                    <p className="text-zinc-400">
                      Lagos, Nigeria                      
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-zinc-800/50 rounded-lg h-fit">
                    <Globe className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Follow Us</h3>
                    <div className="flex gap-4 mt-2">
                      <a href="https://x.com/_CodeMorph" target='_blank' className="text-zinc-400 hover:text-emerald-400 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-twitter"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                      </a>
                      <a href="https://www.reddit.com/user/CodeMorph_/" target='_blank' className="text-zinc-400 hover:text-emerald-400 transition-colors">                        
                         <Bot className="w-7 h-7 -mt-0.5" />
                      </a>
                      {/* <a href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-github"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                      </a> */}
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
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input id="name" className="bg-zinc-800/50 border-zinc-700" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      className="bg-zinc-800/50 border-zinc-700"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Select>
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
                    className="bg-zinc-800/50 border-zinc-700 min-h-[150px]"
                    placeholder="How can we help you?"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
                >
                  Send Message <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

