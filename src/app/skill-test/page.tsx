"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { Button } from '@/components/ui/button'
import { QuickStatistics } from '@/components/quick-statistics'
import { ComparisonGraph } from '@/components/comparison-graph'
import { SyllabusAnalysis } from '@/components/syllabus-analysis'
import { UpdateScoresDialog } from '@/components/update-scores-dialog'
import { QuestionAnalysis } from '@/components/question-analysis'
import type { SkillTest, UpdateScoreData } from '@/types/skill-test'

export default function SkillTestPage() {
    const [testData, setTestData] = useState<SkillTest>({
        title: "Hyper Text Markup Language",
        icon: "/html5.svg",
        questions: 8,
        duration: 15,
        submittedDate: "5 June 2021",
        rank: 1,
        percentile: 30,
        correctAnswers: 10,
        totalQuestions: 15,
    })

    const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const handleUpdateScores = (data: UpdateScoreData) => {
        setTestData({
            ...testData,
            rank: data.rank,
            percentile: data.percentile,
            correctAnswers: data.currentScore,
        })
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
                <main className="flex-1 p-4 md:p-6 overflow-y-auto">
                    <h1 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Skill Test</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                        <div className="lg:col-span-2 space-y-4 md:space-y-6">
                            <div className="bg-white p-4 md:p-6 rounded-lg border">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div className="flex items-center gap-4">
                                        <Image src="/html5.svg" alt="HTML5" width={48} height={48} className="w-10 h-10 md:w-12 md:h-12" />
                                        <div>
                                            <h2 className="text-lg md:text-xl font-semibold">{testData.title}</h2>
                                            <p className="text-sm md:text-base text-gray-500">
                                                Questions: {testData.questions} | Duration: {testData.duration} mins |
                                                Submitted on {testData.submittedDate}
                                            </p>
                                        </div>
                                    </div>
                                    <Button onClick={() => setIsUpdateDialogOpen(true)} className="w-full md:w-max bg-blue-900 hover:bg-blue-600">
                                        Update
                                    </Button>
                                </div>
                            </div>
                            <QuickStatistics
                                rank={testData.rank}
                                percentile={testData.percentile}
                                correctAnswers={testData.correctAnswers}
                                totalQuestions={testData.totalQuestions}
                            />
                            <ComparisonGraph
                                percentile={testData.percentile}
                                averagePercentile={72}
                            />
                        </div>
                        <div className="lg:col-span-1">
                            <div>
                                <SyllabusAnalysis />
                            </div>
                            <div className="mt-4">
                                <QuestionAnalysis
                                    correctAnswers={testData.correctAnswers}
                                    totalQuestions={testData.totalQuestions}
                                />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <UpdateScoresDialog
                open={isUpdateDialogOpen}
                onOpenChange={setIsUpdateDialogOpen}
                currentScores={{
                    rank: testData.rank,
                    percentile: testData.percentile,
                    currentScore: testData.correctAnswers,
                }}
                onSave={handleUpdateScores}
            />
        </div>
    )
}

