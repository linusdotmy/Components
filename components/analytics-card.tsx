"use client"

import { Area, AreaChart, XAxis } from "recharts"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"

const analyticsData = [
    { month: "Jan", visitors: 180 },
    { month: "Feb", visitors: 220 },
    { month: "Mar", visitors: 195 },
    { month: "Apr", visitors: 310 },
    { month: "May", visitors: 380 },
    { month: "Jun", visitors: 418 },
]
const analyticsConfig = { visitors: { label: "Visitors (K)", color: "var(--chart-1)" } } satisfies ChartConfig

export default function AnalyticsCard() {
    return (
        <Card className="break-inside-avoid">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle>Analytics</CardTitle>
                    <Button variant="ghost" size="sm">View Analytics</Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-semibold">418.2K</span>
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground">Visitors this month</p>
            </CardContent>
            <CardContent>
                <ChartContainer config={analyticsConfig} className="h-28 w-full">
                    <AreaChart data={analyticsData} margin={{ top: 4, right: 0, bottom: 0, left: -24 }}>
                        <defs>
                            <linearGradient id="visitorsGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--color-visitors)" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="var(--color-visitors)" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                        <Area dataKey="visitors" stroke="var(--color-visitors)" strokeWidth={1.5} fill="url(#visitorsGrad)" type="monotone" />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
