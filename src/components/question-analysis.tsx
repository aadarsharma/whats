import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface QuestionAnalysisProps {
  correctAnswers: number
  totalQuestions: number
}

export function QuestionAnalysis({ correctAnswers, totalQuestions }: QuestionAnalysisProps) {
  const percentage = (correctAnswers / totalQuestions) * 100
  const circumference = 2 * Math.PI * 70 // radius is 70
  const offset = circumference - (percentage / 100) * circumference

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg md:text-xl">Question Analysis</CardTitle>
          <span className="text-blue-600 font-semibold">{correctAnswers}/{totalQuestions}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-6">
          <span className="font-bold">You scored {correctAnswers} question correct out of {totalQuestions}</span>.{' '}
          {percentage < 70 ? 'However it still needs some improvements' : 'Great job!'}
        </p>
        <div className="flex justify-center">
          <div className="relative w-48 h-48">
            <svg className="transform -rotate-90 w-48 h-48">
              <circle
                cx="96"
                cy="96"
                r="70"
                stroke="#eee"
                strokeWidth="28"
                fill="transparent"
              />
              <circle
                cx="96"
                cy="96"
                r="70"
                stroke="#60A5FA"
                strokeWidth="28"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-4xl font-bold text-blue-600">🎯</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

