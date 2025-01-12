import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SyllabusAnalysis() {
  return (
    <Card>
      {/* Header Section */}
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">
          Syllabus Wise Analysis
        </CardTitle>
      </CardHeader>

      {/* Content Section */}
      <CardContent className="space-y-4 md:space-y-6">
        {/* Hardcoded Item 1 */}
        <div className="space-y-2">
          {/* Topic and Score Display */}
          <div className="flex justify-between text-sm md:text-base">
            <span className="text-gray-600">HTML Tools, Forms, History</span>
          </div>

          {/* Progress Bar and Score */}
          <div className="flex items-center relative">
            <div className="h-2 w-full bg-blue-100 rounded-full flex-grow relative">
              <div
                className="h-full bg-blue-500 transition-all duration-500 ease-in-out rounded-full"
                style={{ width: "80%" }}
              />
            </div>
            <div className="ml-4 font-medium text-blue-500">80%</div>
          </div>
        </div>

        {/* Hardcoded Item 2 */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm md:text-base">
            <span className="text-gray-600">Tags & References in HTML</span>
          </div>
          <div className="flex items-center relative">
            <div className="h-2 w-full bg-orange-100 rounded-full flex-grow relative">
              <div
                className="h-full bg-orange-500 transition-all duration-500 ease-in-out rounded-full"
                style={{ width: "60%" }}
              />
            </div>
            <div className="ml-4 font-medium text-orange-500">60%</div>
          </div>
        </div>

        {/* Hardcoded Item 3 */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm md:text-base">
            <span className="text-gray-600">Tables & References in HTML</span>
          </div>
          <div className="flex items-center relative">
            <div className="h-2 w-full bg-red-100 rounded-full flex-grow relative">
              <div
                className="h-full bg-red-500 transition-all duration-500 ease-in-out rounded-full"
                style={{ width: "24%" }}
              />
            </div>
            <div className="ml-4 font-medium text-red-500">24%</div>
          </div>
        </div>

        {/* Hardcoded Item 4 */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm md:text-base">
            <span className="text-gray-600">Tables & CSS Bascis</span>
          </div>
          <div className="flex items-center relative">
            <div className="h-2 w-full bg-green-100 rounded-full flex-grow relative">
              <div
                className="h-full bg-green-500 transition-all duration-500 ease-in-out rounded-full"
                style={{ width: "96%" }}
              />
            </div>
            <div className="ml-4 font-medium text-green-500">96%</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
