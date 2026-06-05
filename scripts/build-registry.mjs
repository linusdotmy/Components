import { readFile, writeFile, mkdir } from "fs/promises"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")

const registry = JSON.parse(await readFile(join(root, "registry.json"), "utf-8"))

await mkdir(join(root, "public", "r"), { recursive: true })

for (const item of registry.items) {
    const output = { ...item }

    if (item.files?.length) {
        output.files = await Promise.all(
            item.files.map(async (file) => {
                const content = await readFile(join(root, file.path), "utf-8")
                return { ...file, content }
            })
        )
    }

    await writeFile(
        join(root, "public", "r", `${item.name}.json`),
        JSON.stringify(output, null, 2),
        "utf-8"
    )

    console.log(`✓  /r/${item.name}.json`)
}

console.log("Registry built.")
