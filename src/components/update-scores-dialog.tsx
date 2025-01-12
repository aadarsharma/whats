"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import type { UpdateScoreData } from "@/types/skill-test"

interface UpdateScoresDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    currentScores: UpdateScoreData
    onSave: (data: UpdateScoreData) => void
}

export function UpdateScoresDialog({
    open,
    onOpenChange,
    currentScores,
    onSave,
}: UpdateScoresDialogProps) {
    const [scores, setScores] = useState<UpdateScoreData>(currentScores)
    const [touched, setTouched] = useState({
        rank: false,
        percentile: false,
        currentScore: false
    })
    const [errors, setErrors] = useState({
        rank: "",
        percentile: "",
        currentScore: ""
    })

    const validateField = (field: keyof UpdateScoreData, value: number) => {
        switch (field) {
            case 'rank':
                return !value || isNaN(value) ? "required | should be number" : "";
            case 'percentile':
                if (!value || isNaN(value)) return "required | percentile 0-100";
                if (value < 0 || value > 100) return "percentile must be between 0-100";
                return "";
            case 'currentScore':
                if (!value || isNaN(value)) return "required | should be between 0-15";
                if (value < 0 || value > 15) return `score must be between 0 and ${15}`;
                return "";
            default:
                return "";
            }
    }

    const handleChange = (field: keyof UpdateScoreData, value: number) => {
        setScores(prev => ({ ...prev, [field]: value }))
        if (touched[field]) {
            setErrors(prev => ({
                ...prev,
                [field]: validateField(field, value)
            }))
        }
    }

    const handleBlur = (field: keyof UpdateScoreData) => {
        setTouched(prev => ({ ...prev, [field]: true }))
        setErrors(prev => ({
            ...prev,
            [field]: validateField(field, scores[field])
        }))
    }

    const handleSave = () => {
        const newTouched = {
            rank: true,
            percentile: true,
            currentScore: true
        }
        setTouched(newTouched)

        const newErrors = {
            rank: validateField('rank', scores.rank),
            percentile: validateField('percentile', scores.percentile),
            currentScore: ""
        }
        setErrors(newErrors)

        if (Object.values(newErrors).some(error => error !== "")) {
            return
        }

        onSave(scores)
        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent
                className="max-w-screen-md [&>button:last-child]:hidden"
                aria-describedby="dialog-description"
            >
                <DialogHeader>
                    <div className="flex items-center justify-between">
                        <DialogTitle className="text-lg md:text-xl">Update scores</DialogTitle>
                        <Image src="/html5.svg" alt="HTML5" width={40} height={40} />
                    </div>
                </DialogHeader>
                <div id="dialog-description" className="sr-only">
                    Update your skill test scores including rank, percentile, and current score.
                </div>
                <Card>
                    <CardContent className="space-y-4 pt-4">
                    
                    <div className="flex items-center justify-between">
                        <Label htmlFor="rank" className="flex-shrink-0 text-sm md:text-base">
                            <span className="flex items-center gap-2">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-800 text-white text-sm">
                                    1
                                </span>
                                Update your Rank
                            </span>
                        </Label>
                        <Input
                            id="rank"
                            type="number"
                            value={scores.rank}
                            onChange={(e) => handleChange('rank', Number(e.target.value))}
                            onBlur={() => handleBlur('rank')}
                            className={`w-[200px] ${touched.rank && errors.rank ? "border-red-500" : ""}`}
                        />
                    </div> 
            
                        {touched.rank && errors.rank && (
                            <div className="flex justify-end">
                                <p className="text-xs text-red-500 mr-1">{errors.rank}</p>
                            </div>
                        )}
                      
                    
                            <div className="flex items-center justify-between">
                                <Label htmlFor="percentile" className="flex-shrink-0 text-sm md:text-base">
                                    <span className="flex items-center gap-2">
                                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-800 text-white text-sm">
                                            2
                                        </span>
                                        Update your Percentile
                                    </span>
                                </Label>
                                <Input
                                    id="percentile"
                                    type="number"
                                    value={scores.percentile}
                                    onChange={(e) => handleChange('percentile', Number(e.target.value))}
                                    onBlur={() => handleBlur('percentile')}
                                    className={`w-[200px] ${touched.percentile && errors.percentile ? "border-red-500" : ""}`}
                                />
                            </div>
                            {touched.percentile && errors.percentile && (
                                <div className="flex justify-end">
                                    <p className="text-xs text-red-500">{errors.percentile}</p>
                                </div>
                            )}
     

                        <div className="flex items-center justify-between">
                            <Label htmlFor="score" className="flex-shrink-0 text-sm md:text-base">
                                <span className="flex items-center gap-2">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-800 text-white text-sm">
                                        3
                                    </span>
                                    Update your Current Score (out of 15)
                                </span>
                            </Label>
                            <Input
                                id="score"
                                type="number"
                                value={scores.currentScore}
                                onChange={(e) => handleChange('currentScore', Number(e.target.value))}
                                onBlur={() => handleBlur('currentScore')}
                                className={`w-[200px] ${touched.currentScore && errors.currentScore ? "border-red-500" : ""}`}
                            />
                        </div>
                            {touched.currentScore && errors.currentScore && (
                                <div className="flex justify-end">
                                    <p className="text-xs text-red-500">{errors.currentScore}</p>
                                </div>
                            )}
                        
                    </CardContent>
                </Card>
                <div className="flex justify-end gap-4 mt-4">
                    <Button className="border border-black" variant="outline" onClick={() => onOpenChange(false)}>
                        cancel
                    </Button>
                    <Button onClick={handleSave} className="bg-blue-900 hover:bg-blue-500 px-6">
                        save →
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

