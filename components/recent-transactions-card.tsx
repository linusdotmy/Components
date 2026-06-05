"use client"

import { ArrowDownLeftIcon, BuildingIcon, CreditCardIcon, WalletIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const transactions = [
    { Icon: ArrowDownLeftIcon, label: "Stripe Payout", sub: "May 15, 2024", amount: "+$1,248.75", credit: true },
    { Icon: CreditCardIcon, label: "Processing Fee", sub: "May 15, 2024", amount: "-$37.46", credit: false },
    { Icon: BuildingIcon, label: "Bank Transfer", sub: "May 10, 2024", amount: "-$500.00", credit: false },
    { Icon: WalletIcon, label: "Royalty Payment", sub: "May 8, 2024", amount: "+$892.10", credit: true },
]

export default function RecentTransactionsCard() {
    return (
        <Card className="break-inside-avoid">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle>Recent Transactions</CardTitle>
                    <Button variant="ghost" size="sm">View all</Button>
                </div>
            </CardHeader>
            <CardContent className="space-y-0 p-0">
                {transactions.map(({ Icon, label, sub, amount, credit }) => (
                    <div key={label}>
                        <div className="flex items-center gap-3 px-4 py-2">
                            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted">
                                <Icon className="size-3.5 text-muted-foreground" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-xs font-medium">{label}</p>
                                <p className="text-xs text-muted-foreground">{sub}</p>
                            </div>
                            <span className={`text-xs font-semibold tabular-nums ${credit ? "text-emerald-600 dark:text-emerald-400" : ""}`}>{amount}</span>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}
