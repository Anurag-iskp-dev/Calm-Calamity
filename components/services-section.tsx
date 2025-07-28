"use client"

import { motion } from "framer-motion"
import { Gamepad2, Shield, Gem, Gavel, Settings, UserCheck } from "lucide-react"
import { HoverEffect } from "@/components/ui/card-hover-effect"

const services = [
  {
    title: "Epic Gemruns",
    description:
      "Join our legendary gemrun expeditions during special events. Experience the thrill of discovery as we venture into the most challenging dungeons together.",
    icon: Gem,
  },
  {
    title: "Master Crafting",
    description:
      "Our skilled artisans will craft any item you desire at no cost - just bring the materials and watch magic happen. Quality guaranteed, friendship included.",
    icon: Gavel,
  },
  {
    title: "Expert Statting",
    description:
      "Transform your gear with our professional statting services. Our experienced members will optimize your equipment to perfection, completely free of charge.",
    icon: Settings,
  },
  {
    title: "Premium Refining",
    description:
      "Enhance your weapons and armor with our guild's master refiners. Enjoy exclusive member discounts and priority service for all your refining needs.",
    icon: Shield,
  },
  {
    title: "Custom Builds",
    description:
      "Unlock your character's true potential with personalized build guides. Our theorycrafters create optimized builds tailored to your playstyle and preferences.",
    icon: Gamepad2,
  },
  {
    title: "24/7 Support",
    description:
      "Never adventure alone again. Our community is always ready to answer questions, provide guidance, and help you overcome any challenge you face.",
    icon: UserCheck,
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-orange-500 mb-8">🌟 Guild Services 🌟</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the exclusive benefits and services that make Calm Calamity the premier destination for adventurers
          </p>
        </motion.div>

        <HoverEffect items={services} />
      </div>
    </section>
  )
}
