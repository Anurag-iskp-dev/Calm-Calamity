"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const teamMembers = [
  {
    name: "Chica",
    role: "Vice-Guild Master • The Heart of Our Community",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Anurag",
    role: "Guild Member • Master Developer & Strategist",
    image: "/placeholder.svg?height=300&width=300",
  },
  { name: "Golden Bliss", role: "Guild Master • Wise Leader & Mentor", image: "/placeholder.svg?height=300&width=300" },
  {
    name: "１ＭＳＩＮＧＨ™",
    role: "Vice-Guild Master • Resource Specialist",
    image: "/placeholder.svg?height=300&width=300",
  },
  { name: "Dk", role: "Guild Member • Solo Adventure Expert", image: "/placeholder.svg?height=300&width=300" },
  { name: "Vinu", role: "Guild Member • Combat Specialist", image: "/placeholder.svg?height=300&width=300" },
  {
    name: "Rutuk",
    role: "Vice-Guild Master • Explorer Extraordinaire",
    image: "/placeholder.svg?height=300&width=300",
  },
  { name: "Mr.Baddy", role: "Guild Member • Mystery Solver", image: "/placeholder.svg?height=300&width=300" },
]

export function TeamSection() {
  return (
    <section id="team" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-orange-500 mb-8">🌟 Our Legendary Veterans 🌟</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the dedicated members who have shaped our guild's legacy and continue to lead us toward greatness
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-900/50 border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 group overflow-hidden">
                <CardContent className="p-0 relative">
                  <div className="relative overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                      <p className="text-orange-400 text-sm">{member.role}</p>
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
