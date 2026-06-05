"use client"

import { Bar, BarChart, XAxis } from "recharts"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"

const contributionData = [
    { month: "Dec", amount: 3200 },
    { month: "Jan", amount: 5100 },
    { month: "Feb", amount: 3600 },
    { month: "Mar", amount: 6800 },
    { month: "Apr", amount: 5900 },
    { month: "May", amount: 4700 },
]
const contributionConfig = { amount: { label: "Contributions", color: "var(--chart-4)" } } satisfies ChartConfig

export default function ContributionHistoryCard() {
    return (
        <Card className="break-inside-avoid">
            <CardHeader>
                <CardTitle>Contribution History</CardTitle>
                <CardDescription>Last 6 months of activity</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={contributionConfig} className="h-40 w-full">
                    <BarChart data={contributionData} barSize={40}>
                        <XAxis dataKey="month" axisLine={false} tickLine={false} tickMargin={8} tick={{ fontSize: 10 }} />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                        <Bar dataKey="amount" fill="var(--color-amount)" radius={[3, 3, 0, 0]} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardContent className="grid grid-cols-2 gap-3">
                <div className="flex flex-col rounded-lg bg-secondary p-3">
                    <p className="text-[10px] font-medium tracking-wide text-muted-foreground">Upcoming</p>
                    <p className="mt-1 text-xs font-semibold">May 2024</p>
                    <p className="text-xs text-muted-foreground">Scheduled</p>
                </div>
                <div className="flex flex-col rounded-lg bg-secondary p-3">
                    <p className="text-[10px] font-medium tracking-wide text-muted-foreground">Savings Plan</p>
                    <p className="mt-1 text-xs font-semibold">Accelerated</p>
                    <p className="text-xs text-muted-foreground">Recurring</p>
                </div>
            </CardContent>
            <CardFooter>
                <Button variant="default" className="w-full">View Full Report</Button>
            </CardFooter>
        </Card>
    )
}
