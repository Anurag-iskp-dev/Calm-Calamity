"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function SignupPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isLogin && password !== confirmPassword) {
      alert("Passwords do not match")
      return
    }

    try {
      const endpoint = isLogin ? "/api/login" : "/api/signup"
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      if (response.ok) {
        const data = await response.json()
        if (isLogin && data.token) {
          localStorage.setItem("token", data.token)
        }
        alert(isLogin ? "Logged in successfully!" : "Account created successfully!")
        router.push("/")
      } else {
        const error = await response.text()
        alert(error || "An error occurred")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("An error occurred")
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      <BackgroundBeams />

      <div className="relative z-10 w-full max-w-md px-4">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Card className="bg-gray-900/80 border-orange-500/20 backdrop-blur-md">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Link href="/" className="text-2xl font-bold text-orange-500 hover:text-orange-400 transition-colors">
                  Calm Calamity
                </Link>
                <p className="text-gray-400 mt-2">{isLogin ? "Welcome back!" : "Join our guild!"}</p>
              </div>

              <div className="flex mb-8">
                <Button
                  type="button"
                  variant={isLogin ? "default" : "ghost"}
                  className={`flex-1 mr-2 ${isLogin ? "bg-orange-500 hover:bg-orange-600" : "text-gray-400 hover:text-white"}`}
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </Button>
                <Button
                  type="button"
                  variant={!isLogin ? "default" : "ghost"}
                  className={`flex-1 ml-2 ${!isLogin ? "bg-orange-500 hover:bg-orange-600" : "text-gray-400 hover:text-white"}`}
                  onClick={() => setIsLogin(false)}
                >
                  Sign Up
                </Button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-gray-800 border-gray-700 text-white mt-1"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <Label htmlFor="password" className="text-white">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-gray-800 border-gray-700 text-white mt-1"
                    placeholder="Enter your password"
                  />
                </div>

                {!isLogin && (
                  <div>
                    <Label htmlFor="confirmPassword" className="text-white">
                      Confirm Password
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="bg-gray-800 border-gray-700 text-white mt-1"
                      placeholder="Confirm your password"
                    />
                  </div>
                )}

                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  {isLogin ? "Login" : "Create Account"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
