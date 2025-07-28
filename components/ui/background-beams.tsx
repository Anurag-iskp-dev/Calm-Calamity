"use client"

import { useEffect, useRef } from "react"

export function BackgroundBeams() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const beams: Array<{
      x: number
      y: number
      length: number
      angle: number
      speed: number
      opacity: number
    }> = []

    for (let i = 0; i < 5; i++) {
      beams.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 200 + 100,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      beams.forEach((beam) => {
        ctx.save()
        ctx.translate(beam.x, beam.y)
        ctx.rotate(beam.angle)

        const gradient = ctx.createLinearGradient(0, 0, beam.length, 0)
        gradient.addColorStop(0, `rgba(255, 152, 0, 0)`)
        gradient.addColorStop(0.5, `rgba(255, 152, 0, ${beam.opacity})`)
        gradient.addColorStop(1, `rgba(255, 152, 0, 0)`)

        ctx.fillStyle = gradient
        ctx.fillRect(0, -1, beam.length, 2)
        ctx.restore()

        beam.x += Math.cos(beam.angle) * beam.speed
        beam.y += Math.sin(beam.angle) * beam.speed

        if (beam.x < 0 || beam.x > canvas.width || beam.y < 0 || beam.y > canvas.height) {
          beam.x = Math.random() * canvas.width
          beam.y = Math.random() * canvas.height
          beam.angle = Math.random() * Math.PI * 2
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: "linear-gradient(180deg, #000000 0%, #111111 100%)" }}
    />
  )
}
