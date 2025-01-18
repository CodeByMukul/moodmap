'use client'

import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const mockData = [
  { date: '2023-05-01', stress: 65 },
  { date: '2023-05-02', stress: 59 },
  { date: '2023-05-03', stress: 80 },
  { date: '2023-05-04', stress: 81 },
  { date: '2023-05-05', stress: 56 },
  { date: '2023-05-06', stress: 55 },
  { date: '2023-05-07', stress: 40 },
]

const recommendations = [
  "Try a 5-minute breathing exercise today.",
  "Take a short walk to clear your mind.",
  "Practice mindfulness meditation for 10 minutes.",
  "Listen to calming music during your work breaks.",
]

export default function Dashboard() {
  const [currentMood, setCurrentMood] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-soft-gray py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Hi [Name], here's your stress overview!</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Stress Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={mockData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="stress" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mood Tracker</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-4">How are you feeling today?</div>
              <div className="flex justify-center space-x-4">
                {['😌', '😐', '😟'].map((emoji) => (
                  <Button
                    key={emoji}
                    variant={currentMood === emoji ? 'default' : 'outline'}
                    className="text-2xl"
                    onClick={() => setCurrentMood(emoji)}
                  >
                    {emoji}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>AI Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              {recommendations.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="flex space-x-4">
          <Button onClick={() => window.location.href = '/ai-support'}>
            Chat with AI Support
          </Button>
          <Button onClick={() => window.location.href = '/games'}>
            Play Relaxation Games
          </Button>
        </div>
      </div>
    </div>
  )
}

