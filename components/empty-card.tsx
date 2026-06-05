"use client"

import { SearchIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"

export default function EmptyCard() {
    return (
        <Card className="break-inside-avoid">
            <CardContent>
                <Empty>
                    <EmptyMedia variant="icon"><SearchIcon /></EmptyMedia>
                    <EmptyHeader>
                        <EmptyTitle>No results found</EmptyTitle>
                        <EmptyDescription>We couldn't find anything matching your search. Try adjusting your terms.</EmptyDescription>
                    </EmptyHeader>
                    <EmptyContent>
                        <Button variant="outline" size="sm">Clear search</Button>
                    </EmptyContent>
                </Empty>
            </CardContent>
        </Card>
    )
}
