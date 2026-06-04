import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/docs", label: "Docs" },
    { href: "/components", label: "Components" },
]

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
            <div className="mx-auto flex h-15 max-w-5xl items-center px-4">
                <div className="flex flex-1 items-center">
                    <Link href="/" className="mr-1">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={38}
                            height={38}
                            className="rounded-sm"
                        />
                    </Link>
                </div>

                <nav className="flex items-center gap-1">
                    {navLinks.map(({ href, label }) => (
                        <Button key={href} variant="ghost" size="lg" className="text-sm" asChild>
                            <Link href={href}>{label}</Link>
                        </Button>
                    ))}
                </nav>

                <div className="flex flex-1 items-center justify-end gap-2">
                    <Button size="lg" className="text-sm" asChild>
                        <Link href="/get-started">Get Started</Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}
