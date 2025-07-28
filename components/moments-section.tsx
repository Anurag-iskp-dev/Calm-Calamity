"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useState } from "react"

const moments = [
  { id: 1, src: "/placeholder.svg?height=400&width=600", alt: "Epic Guild Raid Victory" },
  { id: 2, src: "/placeholder.svg?height=400&width=600", alt: "Guild Anniversary Celebration" },
  { id: 3, src: "/placeholder.svg?height=400&width=600", alt: "Legendary Adventure Quest" },
  { id: 4, src: "/placeholder.svg?height=400&width=600", alt: "Boss Battle Triumph" },
  { id: 5, src: "/placeholder.svg?height=400&width=600", alt: "Community Event Success" },
  { id: 6, src: "/placeholder.svg?height=400&width=600", alt: "Master Crafting Session" },
]

export function MomentsSection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-orange-500 mb-8">🌟 Legendary Moments 🌟</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Relive the epic adventures, triumphant victories, and unforgettable memories that define our guild's
            incredible journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {moments.map((moment, index) => (
            <motion.div
              key={moment.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="bg-gray-900/50 border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 cursor-pointer group overflow-hidden"
                onClick={() => setSelectedImage(moment.id)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={moment.src || "/placeholder.svg"}
                      alt={moment.alt}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                      <span className="text-white text-lg font-semibold text-center">{moment.alt}</span>
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
