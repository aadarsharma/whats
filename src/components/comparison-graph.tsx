import { Card, CardContent } from "@/components/ui/card"
import { LineChart, Line, XAxis, CartesianGrid, ResponsiveContainer, Tooltip, ReferenceLine, TooltipProps } from 'recharts'

interface DataPoint {
  x: number
  y: number
  students: number
}

const data: DataPoint[] = [
  { x: 0, y: 0, students: 2 },
  { x: 10, y: 5, students: 3 },
  { x: 20, y: 10, students: 3 },
  { x: 30, y: 15, students: 4 },
  { x: 40, y: 30, students: 5 },
  { x: 50, y: 45, students: 6 },
  { x: 60, y: 60, students: 5 },
  { x: 70, y: 40, students: 4 },
  { x: 80, y: 25, students: 3 },
  { x: 90, y: 15, students: 4 },
  { x: 100, y: 5, students: 2 },
]

interface ComparisonGraphProps {
  percentile: number
  averagePercentile: number
}

interface CustomTooltipProps extends TooltipProps<number, string> {
  active?: boolean;
  payload?: Array<{
    payload: DataPoint;
  }>;
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border">
        <p className="text-lg">{payload[0].payload.x}</p>
        <p className="text-sm text-indigo-500">numberOfStudent: {payload[0].payload.students}</p>
      </div>
    )
  }
  return null
}

export function ComparisonGraph({ percentile, averagePercentile }: ComparisonGraphProps) {
  return (
    <Card>
      <CardContent className="p-4 md:p-6">
        <h3 className="font-semibold mb-4 text-lg">Comparison Graph</h3>
        <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
          <span className="font-bold">You scored {percentile}% percentile</span> which is{' '}
          {percentile > averagePercentile ? 'higher' : 'lower'} than the average
          percentile {averagePercentile}% of all the engineers who took this assessment
        </p>
        <div className="h-[200px] md:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
              <XAxis
                dataKey="x"
                stroke="#666"
                tickLine={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="y"
                stroke="#8884d8"
                strokeWidth={1}
                dot={{ r: 4 }}
                activeDot={{ r: 8, fill: '#8884d8' }}
              />
              {/* Add a vertical line for your percentile */}
              <ReferenceLine
                x={percentile}
                stroke="gray"
                strokeWidth={0.5}
                label={{
                  value: 'Your Percentile',
                  position: 'inside',
                  fill: 'gray',
                  fontSize: 12,
                  fontWeight: 'font-light',
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
