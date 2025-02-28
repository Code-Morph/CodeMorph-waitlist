"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "CodeMorph has completely transformed our legacy codebase migration process. What used to take weeks now takes days.",
    author: "Victor Chine-Madubuko",
    role: "CEO, CampusEase",
    avatar: "/Chiem.jpg",
  },
  {
    quote:
      "The AI-powered code translation is incredibly accurate. It understands context and maintains the logic perfectly.",
    author: "Temitope Ilesanmi-ojo",
    role: "UI/UX Designer, LedihTech",
    avatar: "/Tope.jpg",
  },
  {
    quote:
      "We've reduced our code migration costs by 70% while improving quality. CodeMorph is a game-changer for our team.",
    author: "Tose Anthony",
    role: "Software Engineering, LedihTech",
    avatar: "/tony.jpg",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-4 relative" id="testimonials">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Early Users Are Saying</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Hear from our beta testers who are already experiencing the power of AI-driven code transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 h-full">
                <CardContent className="p-6">
                  <div className="mb-6 text-emerald-400">
                    <Quote className="w-8 h-8 opacity-50" />
                  </div>
                  <p className="text-zinc-300 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} className='object-cover' />
                      <AvatarFallback className="bg-emerald-500/20 text-emerald-500">
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white">{testimonial.author}</h4>
                      <p className="text-sm text-zinc-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

