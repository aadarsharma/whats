import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const activities = [
  { id: 1, action: 'Completed Question 4', time: '2 hours ago' },
  { id: 2, action: 'Started Assignment', time: '3 hours ago' },
  { id: 3, action: 'Viewed Course Material', time: '5 hours ago' },
]

export function RecentActivity() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {activities.map((activity) => (
            <li key={activity.id} className="flex justify-between items-center">
              <span>{activity.action}</span>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

