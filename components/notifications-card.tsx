"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const items = [
    { id: "txn", title: "Transaction alerts", desc: "Deposits, withdrawals, and transfers.", checked: true },
    { id: "sec", title: "Security alerts", desc: "Login attempts and account changes.", checked: true },
    { id: "goals", title: "Goal milestones", desc: "Updates at 25%, 50%, 75%, and 100%.", checked: false },
    { id: "market", title: "Market updates", desc: "Weekly summaries and rate changes.", checked: false },
]

export default function NotificationsCard() {
    return (
        <Card className="break-inside-avoid">
            <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Choose which email and push alerts you want to receive.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-0">
                {items.map(({ id, title, desc, checked }) => (
                    <div key={id}>
                        <div className="flex gap-3 py-2">
                            <Checkbox id={id} defaultChecked={checked} className="mt-0.5" />
                            <div className="space-y-0.5">
                                <Label htmlFor={id} className="cursor-pointer">{title}</Label>
                                <p className="text-xs text-muted-foreground">{desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}
