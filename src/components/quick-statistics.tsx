import { Card, CardContent } from "@/components/ui/card"

interface QuickStatisticsProps {
  rank: number
  percentile: number
  correctAnswers: number
  totalQuestions: number
}

export function QuickStatistics({
  rank,
  percentile,
  correctAnswers,
  totalQuestions,
}: QuickStatisticsProps) {
  return (
    <Card>
      <CardContent className="p-4 md:p-6">
        <h3 className="font-semibold mb-4 text-lg">Quick Statistics</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-slate-100 rounded-full">
              🏆
            </div>
            <div>
              <div className="text-xl md:text-2xl font-semibold">{rank}</div>
              <div className="text-xs md:text-sm text-gray-500">YOUR RANK</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-2 bg-slate-100 rounded-full">
              📋
            </div>
            <div>
              <div className="text-xl md:text-2xl font-semibold">{percentile}%</div>
              <div className="text-xs md:text-sm text-gray-500">PERCENTILE</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-2 bg-slate-100 rounded-full">
              ✅
            </div>
            <div>
              <div className="text-xl md:text-2xl font-semibold">
                {correctAnswers} / {totalQuestions}
              </div>
              <div className="text-xs md:text-sm text-gray-500">CORRECT ANSWERS</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

