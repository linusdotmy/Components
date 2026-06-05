"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

const items = [
    { id: "dark", label: "Dark mode", desc: "Use dark theme across the interface.", checked: false },
    { id: "compact", label: "Compact mode", desc: "Reduce spacing for denser layouts.", checked: true },
    { id: "animations", label: "Animations", desc: "Enable transitions and animations.", checked: true },
    { id: "sound", label: "Sound effects", desc: "Play sounds on actions.", checked: false },
]

export default function AppearanceCard() {
    return (
        <Card className="break-inside-avoid">
            <CardHeader>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>Customize how the interface looks.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-0">
                {items.map(({ id, label, desc, checked }) => (
                    <div key={id}>
                        <div className="flex items-center justify-between py-3">
                            <div className="space-y-0.5">
                                <Label htmlFor={id}>{label}</Label>
                                <p className="text-xs text-muted-foreground">{desc}</p>
                            </div>
                            <Switch id={id} defaultChecked={checked} />
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}
