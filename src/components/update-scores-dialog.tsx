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
                className="max-w-[90%] sm:max-w-[80%] md:max-w-screen-sm [&>button:last-child]:hidden"
                aria-describedby="dialog-description"
            >
                <DialogHeader>
                    <div className="flex items-center justify-between">
                        <DialogTitle className="text-base sm:text-lg md:text-xl">Update scores</DialogTitle>
                        <Image src="/html5.svg" alt="HTML5" width={30} height={30} className="sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px]" />
                    </div>
                </DialogHeader>
                <div id="dialog-description" className="sr-only">
                    Update your skill test scores including rank, percentile, and current score.
                </div>
                <Card>
                    <CardContent className="space-y-4 pt-4">
                        {['rank', 'percentile', 'currentScore'].map((field, index) => (
                            <div key={field} className="space-y-2">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                    <Label htmlFor={field} className="text-xs sm:text-sm md:text-base mb-2 sm:mb-0">
                                        <span className="flex items-center gap-2">
                                            <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-800 text-white text-xs sm:text-sm">
                                                {index + 1}
                                            </span>
                                            Update your {field.charAt(0).toUpperCase() + field.slice(1)}
                                            {field === 'currentScore' && " (out of 15)"}
                                        </span>
                                    </Label>
                                    <Input
                                        id={field}
                                        type="number"
                                        value={scores[field as keyof UpdateScoreData]}
                                        onChange={(e) => handleChange(field as keyof UpdateScoreData, Number(e.target.value))}
                                        onBlur={() => handleBlur(field as keyof UpdateScoreData)}
                                        className={`w-full sm:w-[150px] md:w-[200px] ${touched[field as keyof typeof touched] && errors[field as keyof typeof errors] ? "border-red-500" : ""}`}
                                    />
                                </div>
                                {touched[field as keyof typeof touched] && errors[field as keyof typeof errors] && (
                                    <div className="flex justify-end">
                                        <p className="text-xs text-red-500">{errors[field as keyof typeof errors]}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </CardContent>
                </Card>
                <div className="flex flex-col sm:flex-row justify-end gap-4 mt-4">
                    <Button className="border border-black w-full sm:w-auto" variant="outline" onClick={() => onOpenChange(false)}>
                        cancel
                    </Button>
                    <Button onClick={handleSave} className="bg-blue-900 hover:bg-blue-500 px-6 w-full sm:w-auto">
                        save →
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}