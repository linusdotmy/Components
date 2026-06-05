import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    outputFileTracingIncludes: {
        "/r/[name]": ["./components/**/*", "./types.ts"],
    },
}

export default nextConfig
