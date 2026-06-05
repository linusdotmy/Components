import type { NextConfig } from "next"

const nextConfig: NextConfig = {
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
