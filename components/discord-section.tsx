"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function DiscordSection() {
  return (
    <section id="discord" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-orange-500 mb-8">🌟 Join Our Discord 🌟</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with fellow guild members, participate in real-time discussions, and stay updated on all guild
            activities in our vibrant Discord community
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-900/50 border-orange-500/20">
            <CardContent className="p-8">
              <div className="flex justify-center">
                <iframe
                  src="https://discord.com/widget?id=716216682418274356&theme=dark"
                  width="800"
                  height="600"
                  allowTransparency={true}
                  frameBorder="0"
                  sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                  className="w-full max-w-full h-96 md:h-[600px] rounded-lg"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
