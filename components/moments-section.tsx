"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Eye } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const moments = [
  { id: 1, src: "/placeholder.svg?height=400&width=600", alt: "Epic Guild Raid Victory" },
  { id: 2, src: "/placeholder.svg?height=400&width=600", alt: "Guild Anniversary Celebration" },
  { id: 3, src: "/placeholder.svg?height=400&width=600", alt: "Legendary Adventure Quest" },
  { id: 4, src: "/placeholder.svg?height=400&width=600", alt: "Boss Battle Triumph" },
  { id: 5, src: "/placeholder.svg?height=400&width=600", alt: "Community Event Success" },
  { id: 6, src: "/placeholder.svg?height=400&width=600", alt: "Master Crafting Session" },
  { id: 7, src: "/placeholder.svg?height=400&width=600", alt: "PvP Tournament Victory" },
  { id: 8, src: "/placeholder.svg?height=400&width=600", alt: "Guild Hall Gathering" },
  { id: 9, src: "/placeholder.svg?height=400&width=600", alt: "Rare Item Discovery" },
  { id: 10, src: "/placeholder.svg?height=400&width=600", alt: "New Member Welcome" },
  { id: 11, src: "/placeholder.svg?height=400&width=600", alt: "Holiday Special Event" },
  { id: 12, src: "/placeholder.svg?height=400&width=600", alt: "Achievement Milestone" },
]

export function MomentsSection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const displayedMoments = isExpanded ? moments : moments.slice(0, 4)

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedMoments.map((moment, index) => (
            <motion.div
              key={moment.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
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
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                        <Eye className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {moments.length > 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/50 hover:border-orange-500 text-orange-400 hover:text-orange-300 px-8 py-3 text-lg transition-all duration-300"
              size="lg"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-5 h-5 mr-2" />
                  Show Less Moments
                </>
              ) : (
                <>
                  <ChevronDown className="w-5 h-5 mr-2" />
                  View All Moments ({moments.length - 4} more)
                </>
              )}
            </Button>
          </motion.div>
        )}

        {/* Image Modal/Lightbox could be added here if needed */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <Image
                src={moments.find((m) => m.id === selectedImage)?.src || "/placeholder.svg"}
                alt={moments.find((m) => m.id === selectedImage)?.alt || ""}
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
