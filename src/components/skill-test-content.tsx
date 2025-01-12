"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const initialSkills = [
  { name: 'HTML', score: 80 },
  { name: 'CSS', score: 70 },
  { name: 'JavaScript', score: 60 },
  { name: 'React', score: 75 },
  { name: 'Node.js', score: 65 },
]

export function SkillTestContent() {
  const [skills, setSkills] = useState(initialSkills)
  const [editMode, setEditMode] = useState(false)

  const handleScoreChange = (index: number, newScore: number) => {
    const updatedSkills = [...skills]
    updatedSkills[index].score = Math.min(100, Math.max(0, newScore))
    setSkills(updatedSkills)
  }

  const toggleEditMode = () => {
    setEditMode(!editMode)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Skill Test Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={skill.name} className="flex items-center space-x-4">
                <span className="w-24">{skill.name}</span>
                <Progress value={skill.score} className="flex-1" />
                {editMode ? (
                  <Input
                    type="number"
                    value={skill.score}
                    onChange={(e) => handleScoreChange(index, parseInt(e.target.value))}
                    className="w-16"
                  />
                ) : (
                  <span className="w-16 text-right">{skill.score}%</span>
                )}
              </div>
            ))}
          </div>
          <Button onClick={toggleEditMode} className="mt-4">
            {editMode ? 'Update' : 'Edit Scores'}
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Skill Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={skills}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="score" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

