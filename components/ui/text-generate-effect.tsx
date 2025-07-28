"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface TextGenerateEffectProps {
  words: string
  className?: string
}

export function TextGenerateEffect({ words, className }: TextGenerateEffectProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < words.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + words[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, words])

  return (
    <motion.h1 className={className} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="inline-block"
      >
        |
      </motion.span>
    </motion.h1>
  )
}
