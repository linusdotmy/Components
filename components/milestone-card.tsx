"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function MilestoneCard() {
    return (
        <Card className="break-inside-avoid">
            <CardHeader>
                <CardTitle>Set a new milestone</CardTitle>
                <CardDescription>Define your financial target and we'll help you pace your savings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
                <div className="space-y-2">
                    <Label htmlFor="goal-name">Goal Name</Label>
                    <Input id="goal-name" placeholder="e.g. New Car, Home Downpayment" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                        <Label htmlFor="target-amount">Target Amount</Label>
                        <div className="relative">
                            <span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">$</span>
                            <Input id="target-amount" className="pl-5" placeholder="15,000" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="target-date">Target Date</Label>
                        <Input id="target-date" placeholder="Dec 2025" />
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button className="w-full">Create Goal</Button>
                <Button variant="ghost" className="w-full">Cancel</Button>
            </CardFooter>
        </Card>
    )
}
