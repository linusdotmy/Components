import { NextResponse } from "next/server"

import registry from "@/registry.json"

export async function GET(
    _req: Request,
    { params }: { params: Promise<{ name: string }> }
) {
    const { name } = await params
    const item = (registry.items as Array<{ name: string }>).find(
        (i) => i.name === name
    )

    if (!item) {
        return new NextResponse("Not found", { status: 404 })
    }

    return NextResponse.json(item)
}
