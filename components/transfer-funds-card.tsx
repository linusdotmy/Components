"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TransferFundsCard() {
    return (
        <Card className="break-inside-avoid">
            <CardHeader>
                <CardTitle>Transfer Funds</CardTitle>
                <CardDescription>Move money between your connected accounts.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
                <div className="space-y-2">
                    <Label htmlFor="transfer-amount">Amount to Transfer</Label>
                    <div className="relative">
                        <span className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">$</span>
                        <Input id="transfer-amount" className="pl-6" defaultValue="1,200.00" />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label>From Account</Label>
                    <Select defaultValue="checking">
                        <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="checking">Main Checking - $12,450.00</SelectItem>
                            <SelectItem value="savings">High Yield Savings - $42,100.00</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label>To Account</Label>
                    <Select defaultValue="savings">
                        <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="savings">High Yield Savings - $42,100.00</SelectItem>
                            <SelectItem value="checking">Main Checking - $12,450.00</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </CardContent>
            <CardContent className="space-y-2">
                {[
                    { label: "Estimated arrival", value: "Today, Apr 14" },
                    { label: "Transaction fee", value: "$0.00" },
                    { label: "Total amount", value: "$1,200.00" },
                ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between">
                        <span className="text-xs text-muted-foreground">{label}</span>
                        <span className="text-xs font-medium tabular-nums">{value}</span>
                    </div>
                ))}
            </CardContent>
            <CardFooter>
                <Button className="w-full">Confirm Transfer</Button>
            </CardFooter>
        </Card>
    )
}
