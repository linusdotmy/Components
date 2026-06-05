"use client"

import { useState } from "react"
import type { DateRange } from "react-day-picker"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"

export default function CalendarCard() {
    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(),
        to: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
    })

    return (
        <Card className="break-inside-avoid">
            <CardContent className="p-0">
                <Calendar
                    mode="range"
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={1}
                    className="w-full"
                    classNames={{ root: "w-full" }}
                />
            </CardContent>
        </Card>
    )
}
