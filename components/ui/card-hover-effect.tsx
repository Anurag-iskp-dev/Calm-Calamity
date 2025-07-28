"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface HoverEffectItem {
  title: string
  description: string
  icon: LucideIcon
}

interface HoverEffectProps {
  items: HoverEffectItem[]
}

export function HoverEffect({ items }: HoverEffectProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -10 }}
        >
          <Card className="bg-gray-900/50 border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 h-full group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
