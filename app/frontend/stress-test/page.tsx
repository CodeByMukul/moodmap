'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

const questions = [
  {
    id: 1,
    text: "How often do you feel overwhelmed?",
    type: "multiple-choice",
    options: ["Rarely", "Sometimes", "Often", "Always"],
  },
  {
    id: 2,
    text: "Rate your energy level today",
    type: "slider",
    min: 1,
    max: 10,
  },
  // Add more questions here
]

export default function StressTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string | number>>({})
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (answer: string | number) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: answer })
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const calculateStressScore = () => {
    // This is a simplified calculation. In a real app, you'd have a more complex algorithm.
    const totalScore = Object.values(answers).reduce((sum, value) => {
      return sum + (typeof value === 'number' ? value : parseInt(value, 10))
    }, 0)
    return Math.round((totalScore / (questions.length * 10)) * 100)
  }

  if (showResult) {
    const score = calculateStressScore()
    return (
      <div className="min-h-screen bg-soft-gray py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Your Stress Test Results</h1>
          <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Your stress level is: {score}%</h2>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-soft-blue h-2.5 rounded-full" style={{ width: `${score}%` }}></div>
              </div>
            </div>
            <p className="text-lg mb-6">
              {score < 50
                ? "Your stress level is relatively low. Keep up the good work!"
                : "Your stress level is elevated. Consider trying some relaxation techniques or speaking with a professional."}
            </p>
            <Button className="w-full" onClick={() => window.location.href = '/dashboard'}>
              View Recommendations
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className="min-h-screen bg-soft-gray py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Stress Test</h1>
        <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
          <p className="text-lg mb-6">Take a deep breath. Let's understand how you're feeling today.</p>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">{question.text}</h2>
            {question.type === "multiple-choice" && (
              <RadioGroup onValueChange={(value) => handleAnswer(value)}>
                {question.options.map((option) => (
                  <div className="flex items-center space-x-2 mb-2" key={option}>
                    <RadioGroupItem value={option} id={option} />
                    <Label htmlFor={option}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            )}
            {question.type === "slider" && (
              <Slider
                min={question.min}
                max={question.max}
                step={1}
                onValueChange={(value) => handleAnswer(value[0])}
              />
            )}
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            {currentQuestion < questions.length - 1 ? (
              <Button onClick={() => setCurrentQuestion(currentQuestion + 1)}>Next</Button>
            ) : (
              <Button onClick={() => setShowResult(true)}>Finish</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

