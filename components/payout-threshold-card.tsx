"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"

export default function PayoutThresholdCard() {
    return (
        <Card className="break-inside-avoid">
            <CardHeader>
                <CardTitle>Payout Threshold</CardTitle>
                <CardDescription>Set the minimum balance required before a payout is triggered.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-1.5">
                    <Label>Preferred Currency</Label>
                    <Select defaultValue="usd">
                        <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="usd">USD - United States Dollar</SelectItem>
                            <SelectItem value="eur">EUR - Euro</SelectItem>
                            <SelectItem value="gbp">GBP - British Pound</SelectItem>
                            <SelectItem value="myr">MYR - Malaysian Ringgit</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                        <Label>Minimum Payout Amount</Label>
                        <span className="text-sm font-semibold">$2500.00</span>
                    </div>
                    <Slider defaultValue={[25]} max={100} step={1} />
                </div>
                <div className="space-y-1.5">
                    <Label htmlFor="threshold-notes">Notes</Label>
                    <Textarea id="threshold-notes" placeholder="Add any notes for this payout configuration…" className="min-h-20 resize-none" />
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Save Threshold</Button>
            </CardFooter>
        </Card>
    )
}
