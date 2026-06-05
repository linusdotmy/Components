"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const plans = [
    { value: "starter", label: "Starter", desc: "Perfect for personal projects", price: "Free" },
    { value: "pro", label: "Pro", desc: "For professionals and small teams", price: "$12/mo" },
    { value: "enterprise", label: "Enterprise", desc: "Advanced features and SSO", price: "$49/mo" },
]

export default function PlanSelectionCard() {
    return (
        <Card className="break-inside-avoid">
            <CardHeader>
                <CardTitle>Plan Selection</CardTitle>
                <CardDescription>Choose the plan that fits your workflow.</CardDescription>
            </CardHeader>
            <CardContent>
                <RadioGroup defaultValue="pro" className="gap-2">
                    {plans.map(({ value, label, desc, price }) => (
                        <Label key={value} htmlFor={`plan-${value}`} className="flex cursor-pointer items-center gap-3 rounded-md border border-input p-3 has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5">
                            <RadioGroupItem value={value} id={`plan-${value}`} />
                            <div className="flex-1">
                                <p className="font-medium">{label}</p>
                                <p className="text-xs text-muted-foreground">{desc}</p>
                            </div>
                            <span className="text-xs font-semibold">{price}</span>
                        </Label>
                    ))}
                </RadioGroup>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Continue</Button>
            </CardFooter>
        </Card>
    )
}
