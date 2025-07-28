"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"

export function RulesSection() {
  const [rulesData, setRulesData] = useState<any[]>([])
  const [showDialog, setShowDialog] = useState(false)
  const [newRule, setNewRule] = useState("")
  const [userData, setUserData] = useState<any>(null)

  useEffect(() => {
    // Mock rules data - replace with actual API call
    setRulesData([
      {
        _id: "1",
        RuleData:
          "Respect and Honor: Treat every guild member with dignity and respect. We celebrate diversity of opinions while maintaining a supportive environment free from harassment or discrimination.",
      },
      {
        _id: "2",
        RuleData:
          "Positive Community: Keep discussions constructive and avoid controversial topics that may divide our community. We're here to have fun and build lasting friendships.",
      },
      {
        _id: "3",
        RuleData:
          "Channel Etiquette: Use appropriate channels for their intended purposes. Keep content family-friendly and avoid spamming or posting inappropriate material.",
      },
      {
        _id: "4",
        RuleData:
          "Link Sharing Policy: Please request permission from administrators before sharing external links to ensure community safety and relevance.",
      },
      {
        _id: "5",
        RuleData:
          "Proper Introduction: Welcome new members by introducing yourself in our dedicated introduction channel. Include your in-game name (IGN) for easy identification.",
      },
      {
        _id: "6",
        RuleData:
          "Achievement Celebration: Feel free to share your accomplishments and celebrate your progress with the guild!",
      },
      {
        _id: "7",
        RuleData:
          "English Communication: To ensure everyone can participate, please use English in all public channels.",
      },
      {
        _id: "8",
        RuleData:
          "Respectful Language: Maintain a positive atmosphere by avoiding offensive language or behavior that might make others uncomfortable.",
      },
    ])
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newRule.trim()) return

    // Mock adding rule - replace with actual API call
    const newRuleObj = {
      _id: Date.now().toString(),
      RuleData: newRule,
    }
    setRulesData([...rulesData, newRuleObj])
    setNewRule("")
    setShowDialog(false)
  }

  return (
    <section id="rules" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-orange-500 mb-8">🌟 Guild Charter 🌟</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our community guidelines that help us maintain a welcoming and enjoyable environment for all members
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-900/50 border-orange-500/20 mb-8">
            <CardContent className="p-8">
              <p className="text-lg text-gray-300 mb-6">
                At Calm Calamity, we believe in creating a space where every member can thrive and enjoy their gaming
                experience.
              </p>
              <p className="text-gray-400 mb-8">
                These guidelines help us maintain the friendly, supportive atmosphere that makes our guild special. By
                following these principles, we ensure everyone feels welcome and valued in our community.
              </p>

              <div className="space-y-4">
                {rulesData.map((rule, index) => (
                  <motion.div
                    key={rule._id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-4 rounded-lg bg-black/20 border border-orange-500/10 hover:border-orange-500/30 transition-colors"
                  >
                    <span className="text-orange-500 font-bold text-lg min-w-[2rem]">{index + 1}.</span>
                    <p className="text-gray-300 flex-1">{rule.RuleData}</p>
                  </motion.div>
                ))}
              </div>

              {userData && userData.role === "admin" && (
                <div className="mt-8 text-center">
                  <Dialog open={showDialog} onOpenChange={setShowDialog}>
                    <DialogTrigger asChild>
                      <Button className="bg-orange-500 hover:bg-orange-600">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Rule
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-gray-900 border-orange-500/20">
                      <DialogHeader>
                        <DialogTitle className="text-orange-500">Add New Rule</DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="rule" className="text-white">
                            Rule Description
                          </Label>
                          <Input
                            id="rule"
                            value={newRule}
                            onChange={(e) => setNewRule(e.target.value)}
                            placeholder="Enter the new rule..."
                            className="bg-gray-800 border-gray-700 text-white"
                          />
                        </div>
                        <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                          Add Rule
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
