"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    mountRef.current.appendChild(renderer.domElement)

    // Create floating particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 5000
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: 0xff9800,
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    camera.position.z = 2

    const animate = () => {
      requestAnimationFrame(animate)
      particlesMesh.rotation.y += 0.001
      particlesMesh.rotation.x += 0.0005
      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div ref={mountRef} className="absolute inset-0 z-0" />

      <div className="relative z-10 text-center px-4">
        <div className="mb-8">
          <TextGenerateEffect
            words="Calm Calamity"
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent"
          />
        </div>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8">
          Where legends unite, adventures begin, and friendships forge the strongest bonds
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            Discover Our Guild
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg bg-transparent"
            onClick={() => document.getElementById("discord")?.scrollIntoView({ behavior: "smooth" })}
          >
            Join Discord
          </Button>
        </div>
      </div>
    </section>
  )
}
