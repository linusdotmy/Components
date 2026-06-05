import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Navbar } from "@/components/navbar"
import { GeistSans } from "geist/font/sans";

export const metadata = {
    title: "kang/ui",
    description: "UI components built by Linus Kang",
}

export default function RootLayout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode
    }>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
        >
            <body className={GeistSans.className}>
                <ThemeProvider>
                    <TooltipProvider>
                        <Navbar />
                        {children}
                    </TooltipProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
