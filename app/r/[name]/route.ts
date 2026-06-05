import { readFile } from "fs/promises"
import path from "path"
import { NextResponse } from "next/server"

import registry from "@/registry.json"

type RegistryFile = {
    path: string
    type: string
    target?: string
}

type RegistryItem = {
    name: string
    files?: RegistryFile[]
    [key: string]: unknown
}

export async function GET(
    _req: Request,
    { params }: { params: Promise<{ name: string }> }
) {
    const { name } = await params
    const item = (registry.items as RegistryItem[]).find((i) => i.name === name)

    if (!item) {
        return new NextResponse("Not found", { status: 404 })
    }

    // For items with files, read content from disk so registry.json
    // never needs to be manually updated when the source changes.
    if (item.files?.length) {
        const files = await Promise.all(
            item.files.map(async (file) => {
                const content = await readFile(
                    path.join(process.cwd(), file.path),
                    "utf-8"
                )
                return { ...file, content }
            })
        )
        return NextResponse.json({ ...item, files })
    }

    return NextResponse.json(item)
}
