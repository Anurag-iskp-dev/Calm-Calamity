"use client"

import { motion } from "framer-motion"
import { SparklesCore } from "@/components/ui/sparkles"

export function WelcomeSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#ff9800"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-orange-500 mb-8">🌟 Welcome to Our Guild 🌟</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              Step into the world of <span className="text-orange-400 font-semibold">Calm Calamity</span> - where
              adventure meets friendship and legends are forged together.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              We're more than just a guild; we're a close-knit family of passionate gamers who believe in supporting
              each other through every quest, raid, and challenge that comes our way.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Whether you're seeking epic adventures, crafting mastery, or simply a place to call home in the vast world
              of Toram Online, you'll find your place among our ranks. Join us and discover what it truly means to be
              part of something extraordinary.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
