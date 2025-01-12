import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function AssignmentInfo() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Assignment 1: Whatbytes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Progress</span>
            <span className="text-sm font-semibold">4/10 Completed</span>
          </div>
          <Progress value={40} className="w-full" />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Time Spent</p>
              <p className="text-lg font-semibold">1h 30m</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Avg. Score</p>
              <p className="text-lg font-semibold">75%</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

