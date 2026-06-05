"use client"

import { PlusIcon, UploadCloudIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function DistributeTrackCard() {
    return (
        <Card className="break-inside-avoid">
            <CardHeader>
                <div className="flex justify-end">
                    <Button size="icon" variant="outline"><PlusIcon /></Button>
                </div>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-3 pb-2 text-center">
                <div className="flex size-12 items-center justify-center rounded-full bg-muted">
                    <UploadCloudIcon className="size-5 text-muted-foreground" />
                </div>
                <div>
                    <p className="text-sm font-medium">Distribute Track</p>
                    <p className="mt-1 text-xs text-muted-foreground">Upload your first master to start reaching listeners on Spotify, Apple Music, and more.</p>
                </div>
            </CardContent>
            <CardFooter className="justify-center">
                <Button variant="outline">Create Release</Button>
            </CardFooter>
        </Card>
    )
}
