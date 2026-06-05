"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function UiCardDemoCard() {
    return (
        <Card className="break-inside-avoid">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle>Card</CardTitle>
                </div>
                <CardDescription>A surface for grouping related content and actions.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
                <p className="text-xs font-medium text-muted-foreground">Preview</p>
                <Card className="shadow-none bg-secondary">
                    <CardHeader>
                        <CardTitle className="text-sm">Card Title</CardTitle>
                        <CardDescription>A short description goes here.</CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Button size="sm">Action</Button>
                    </CardFooter>
                </Card>
            </CardContent>
        </Card>
    )
}
