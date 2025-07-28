"use client"

import { motion } from "framer-motion"
import { Heart, Code, Gamepad2, Users, Shield, Gem } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Team", href: "#team" },
    { name: "Rules", href: "#rules" },
    { name: "Gallery", href: "#gallery" },
    { name: "Discord", href: "#discord" },
  ]

  const stats = [
    { icon: Users, label: "Active Members", value: "50+" },
    { icon: Shield, label: "Years Strong", value: "3+" },
    { icon: Gem, label: "Raids Completed", value: "500+" },
    { icon: Gamepad2, label: "Adventures", value: "1000+" },
  ]

  return (
    <footer className="relative bg-gradient-to-t from-black via-gray-900 to-gray-800 border-t border-orange-500/20">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Guild Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent mb-4">
                Calm Calamity
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Where legends are born and friendships last forever. Join our epic journey through the world of Toram
                Online and beyond.
              </p>
              <div className="flex items-center space-x-2 text-orange-400">
                <Heart className="w-5 h-5" />
                <span className="text-gray-300">Building communities since 2021</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Guild Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-semibold text-white mb-6">Guild Stats</h4>
              <div className="space-y-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <stat.icon className="w-4 h-4 text-orange-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">{stat.value}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-orange-500/20 bg-black/50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-gray-400 text-center md:text-left">
                <p>&copy; {currentYear} Calm Calamity Guild. All rights reserved.</p>
              </div>

              {/* Developer Credit */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center space-x-2 text-gray-400"
              >
                <span>Crafted with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>by</span>
                <div className="flex items-center space-x-1 text-orange-400 font-semibold">
                  <Code className="w-4 h-4" />
                  <span>Anurag</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
