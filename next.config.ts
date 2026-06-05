import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    outputFileTracingIncludes: {
        "/r/[name]": [
            "./registry.json",
            "./components/**/*",
            "./types.ts",
        ],
        "/r/registry.json": [
            "./registry.json",
        ],
    },
    async rewrites() {
        return [
            {
                source: "/r/:name.json",
                destination: "/r/:name",
            },
        ]
    },
}

export default nextConfig
