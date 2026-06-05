"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function ClaimableBalanceCard() {
    return (
        <Card className="break-inside-avoid">
            <CardHeader>
                <CardTitle>Claimable Balance</CardTitle>
            </CardHeader>
            <CardContent>
                <span className="text-3xl font-semibold tracking-tight">$1,211.29</span>
            </CardContent>
            <CardContent className="space-y-2">
                <div className="flex flex-col gap-2 rounded-lg bg-secondary p-3">
                    <div className="flex justify-between">
                        <span className="text-xs text-muted-foreground">Net Royalties</span>
                        <span className="text-xs font-medium tabular-nums">$1,248.75</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-xs text-muted-foreground">Processing Fee</span>
                        <span className="text-xs font-medium tabular-nums text-destructive">-$37.46</span>
                    </div>
                    <Separator className="my-1" />
                    <div className="flex justify-between">
                        <span className="text-xs font-medium">Total Ready to Claim</span>
                        <span className="text-xs font-semibold tabular-nums">$1,211.29 USD</span>
                    </div>
                </div>
            </CardContent>
            <CardContent className="pt-0">
                <p className="text-xs text-muted-foreground">Once your bank is connected, balances over $10.00 are automatically eligible for monthly distribution on the 15th of each month.</p>
            </CardContent>
        </Card>
    )
}
