"use client"

import Link from "next/link"
import {
    ArrowDownLeftIcon,
    BuildingIcon,
    CreditCardIcon,
    PlusIcon,
    SearchIcon,
    UploadCloudIcon,
    WalletIcon,
} from "lucide-react"
import { Area, AreaChart, Bar, BarChart, XAxis } from "recharts"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { Checkbox } from "@/components/ui/checkbox"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import Event from "@/components/event"

const contributionData = [
    { month: "Dec", amount: 3200 },
    { month: "Jan", amount: 5100 },
    { month: "Feb", amount: 3600 },
    { month: "Mar", amount: 6800 },
    { month: "Apr", amount: 5900 },
    { month: "May", amount: 4700 },
]
const contributionConfig = { amount: { label: "Contributions", color: "var(--chart-4)" } } satisfies ChartConfig

const analyticsData = [
    { month: "Jan", visitors: 180 },
    { month: "Feb", visitors: 220 },
    { month: "Mar", visitors: 195 },
    { month: "Apr", visitors: 310 },
    { month: "May", visitors: 380 },
    { month: "Jun", visitors: 418 },
]
const analyticsConfig = { visitors: { label: "Visitors (K)", color: "var(--chart-1)" } } satisfies ChartConfig

const transactions = [
    { Icon: ArrowDownLeftIcon, label: "Stripe Payout", sub: "May 15, 2024", amount: "+$1,248.75", credit: true },
    { Icon: CreditCardIcon, label: "Processing Fee", sub: "May 15, 2024", amount: "-$37.46", credit: false },
    { Icon: BuildingIcon, label: "Bank Transfer", sub: "May 10, 2024", amount: "-$500.00", credit: false },
    { Icon: WalletIcon, label: "Royalty Payment", sub: "May 8, 2024", amount: "+$892.10", credit: true },
]

export default function Page() {
    return (
        <div className="flex flex-col">

            <section className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-4 py-20 text-center">
                <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-balance">
                    Welcome to My Component Library
                </h1>
                <p className="max-w-lg text-base text-muted-foreground text-balance">
                    My component registry which I use to build apps. Open source, open code.
                </p>
                <div className="flex items-center gap-2">
                    <Button size="xl" asChild>
                        <Link href="/docs">Get Started</Link>
                    </Button>
                </div>
            </section>

            <section className="mx-auto w-full max-w-5xl columns-1 gap-4 space-y-4 px-4 py-12 sm:columns-2 lg:columns-3">

                <Card className="break-inside-avoid">
                    <CardHeader>
                        <CardTitle>Contribution History</CardTitle>
                        <CardDescription>Last 6 months of activity</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={contributionConfig} className="h-40 w-full">
                            <BarChart data={contributionData} barSize={40}>
                                <XAxis dataKey="month" axisLine={false} tickLine={false} tickMargin={8} tick={{ fontSize: 10 }} />
                                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                                <Bar dataKey="amount" fill="var(--color-amount)" radius={[3, 3, 0, 0]} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                    <CardContent className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col rounded-lg bg-secondary p-3">
                            <p className="text-[10px] font-medium tracking-wide text-muted-foreground">Upcoming</p>
                            <p className="mt-1 text-xs font-semibold">May 2024</p>
                            <p className="text-xs text-muted-foreground">Scheduled</p>
                        </div>
                        <div className="flex flex-col rounded-lg bg-secondary p-3">
                            <p className="text-[10px] font-medium tracking-wide text-muted-foreground">Savings Plan</p>
                            <p className="mt-1 text-xs font-semibold">Accelerated</p>
                            <p className="text-xs text-muted-foreground">Recurring</p>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button variant="default" className="w-full">View Full Report</Button>
                    </CardFooter>
                </Card>

                <Card className="break-inside-avoid">
                    <CardHeader>
                        <CardTitle>Set a new milestone</CardTitle>
                        <CardDescription>Define your financial target and we'll help you pace your savings.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div className="space-y-2">
                            <Label htmlFor="goal-name">Goal Name</Label>
                            <Input id="goal-name" placeholder="e.g. New Car, Home Downpayment" />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-2">
                                <Label htmlFor="target-amount">Target Amount</Label>
                                <div className="relative">
                                    <span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">$</span>
                                    <Input id="target-amount" className="pl-5" placeholder="15,000" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="target-date">Target Date</Label>
                                <Input id="target-date" placeholder="Dec 2025" />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                        <Button className="w-full">Create Goal</Button>
                        <Button variant="ghost" className="w-full">Cancel</Button>
                    </CardFooter>
                </Card>

                <Card className="break-inside-avoid">
                    <CardHeader>
                        <CardTitle>Claimable Balance</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <span className="text-3xl font-semibold tracking-tight">$1,211.29</span>
                    </CardContent>
                    <CardContent className="space-y-2">
                        <div className="flex flex-col gap-2 rounded-lg bg-secondary p-3">
                            <div className="flex justify-between">
                                <span className="text-xs text-muted-foreground">Net Royalties</span>
                                <span className="text-xs font-medium tabular-nums">$1,248.75</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-xs text-muted-foreground">Processing Fee</span>
                                <span className="text-xs font-medium tabular-nums text-destructive">-$37.46</span>
                            </div>
                            <Separator className="my-1" />
                            <div className="flex justify-between">
                                <span className="text-xs font-medium">Total Ready to Claim</span>
                                <span className="text-xs font-semibold tabular-nums">$1,211.29 USD</span>
                            </div>
                        </div>
                    </CardContent>
                    <CardContent className="pt-0">
                        <p className="text-xs text-muted-foreground">Once your bank is connected, balances over $10.00 are automatically eligible for monthly distribution on the 15th of each month.</p>
                    </CardContent>
                </Card>

                <Card className="break-inside-avoid">
                    <CardHeader>
                        <CardTitle>Transfer Funds</CardTitle>
                        <CardDescription>Move money between your connected accounts.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div className="space-y-2">
                            <Label htmlFor="transfer-amount">Amount to Transfer</Label>
                            <div className="relative">
                                <span className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">$</span>
                                <Input id="transfer-amount" className="pl-6" defaultValue="1,200.00" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label>From Account</Label>
                            <Select defaultValue="checking">
                                <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="checking">Main Checking - $12,450.00</SelectItem>
                                    <SelectItem value="savings">High Yield Savings - $42,100.00</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label>To Account</Label>
                            <Select defaultValue="savings">
                                <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="savings">High Yield Savings - $42,100.00</SelectItem>
                                    <SelectItem value="checking">Main Checking - $12,450.00</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                    <CardContent className="space-y-2">
                        {[
                            { label: "Estimated arrival", value: "Today, Apr 14" },
                            { label: "Transaction fee", value: "$0.00" },
                            { label: "Total amount", value: "$1,200.00" },
                        ].map(({ label, value }) => (
                            <div key={label} className="flex justify-between">
                                <span className="text-xs text-muted-foreground">{label}</span>
                                <span className="text-xs font-medium tabular-nums">{value}</span>
                            </div>
                        ))}
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">Confirm Transfer</Button>
                    </CardFooter>
                </Card>

                <Card className="break-inside-avoid">
                    <CardHeader>
                        <CardTitle>Payout Threshold</CardTitle>
                        <CardDescription>Set the minimum balance required before a payout is triggered.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-1.5">
                            <Label>Preferred Currency</Label>
                            <Select defaultValue="usd">
                                <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="usd">USD - United States Dollar</SelectItem>
                                    <SelectItem value="eur">EUR - Euro</SelectItem>
                                    <SelectItem value="gbp">GBP - British Pound</SelectItem>
                                    <SelectItem value="myr">MYR - Malaysian Ringgit</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2.5">
                            <div className="flex items-center justify-between">
                                <Label>Minimum Payout Amount</Label>
                                <span className="text-sm font-semibold">$2500.00</span>
                            </div>
                            <Slider defaultValue={[25]} max={100} step={1} />
                        </div>
                        <div className="space-y-1.5">
                            <Label htmlFor="threshold-notes">Notes</Label>
                            <Textarea id="threshold-notes" placeholder="Add any notes for this payout configuration…" className="min-h-20 resize-none" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">Save Threshold</Button>
                    </CardFooter>
                </Card>

                <Card className="break-inside-avoid">
                    <CardHeader>
                        <CardTitle>Notifications</CardTitle>
                        <CardDescription>Choose which email and push alerts you want to receive.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-0">
                        {[
                            { id: "txn", title: "Transaction alerts", desc: "Deposits, withdrawals, and transfers.", checked: true },
                            { id: "sec", title: "Security alerts", desc: "Login attempts and account changes.", checked: true },
                            { id: "goals", title: "Goal milestones", desc: "Updates at 25%, 50%, 75%, and 100%.", checked: false },
                            { id: "market", title: "Market updates", desc: "Weekly summaries and rate changes.", checked: false },
                        ].map(({ id, title, desc, checked }, i, arr) => (
                            <div key={id}>
                                <div className="flex gap-3 py-2">
                                    <Checkbox id={id} defaultChecked={checked} className="mt-0.5" />
                                    <div className="space-y-0.5">
                                        <Label htmlFor={id} className="cursor-pointer">{title}</Label>
                                        <p className="text-xs text-muted-foreground">{desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                <Card className="break-inside-avoid">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle>Analytics</CardTitle>
                            <Button variant="ghost" size="sm">View Analytics</Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-semibold">418.2K</span>
                        </div>
                        <p className="mt-0.5 text-xs text-muted-foreground">Visitors this month</p>
                    </CardContent>
                    <CardContent>
                        <ChartContainer config={analyticsConfig} className="h-28 w-full">
                            <AreaChart data={analyticsData} margin={{ top: 4, right: 0, bottom: 0, left: -24 }}>
                                <defs>
                                    <linearGradient id="visitorsGrad" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="var(--color-visitors)" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="var(--color-visitors)" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                                <Area dataKey="visitors" stroke="var(--color-visitors)" strokeWidth={1.5} fill="url(#visitorsGrad)" type="monotone" />
                            </AreaChart>
                        </ChartContainer>
                    </CardContent>
                </Card>

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

                <Card className="break-inside-avoid">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle>Recent Transactions</CardTitle>
                            <Button variant="ghost" size="sm">View all</Button>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-0 p-0">
                        {transactions.map(({ Icon, label, sub, amount, credit }, i) => (
                            <div key={label}>
                                <div className="flex items-center gap-3 px-4 py-2">
                                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted">
                                        <Icon className="size-3.5 text-muted-foreground" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs font-medium">{label}</p>
                                        <p className="text-xs text-muted-foreground">{sub}</p>
                                    </div>
                                    <span className={`text-xs font-semibold tabular-nums ${credit ? "text-emerald-600 dark:text-emerald-400" : ""}`}>{amount}</span>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                <Card className="break-inside-avoid">
                    <CardHeader>
                        <CardTitle>Account Settings</CardTitle>
                        <CardDescription>Manage your profile and preferences.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="profile">
                            <TabsList>
                                <TabsTrigger value="profile">Profile</TabsTrigger>
                                <TabsTrigger value="billing">Billing</TabsTrigger>
                                <TabsTrigger value="security">Security</TabsTrigger>
                            </TabsList>
                            <TabsContent value="profile" className="mt-3 space-y-3">
                                <div className="space-y-1">
                                    <Label htmlFor="display-name">Display name</Label>
                                    <Input id="display-name" defaultValue="Linus Kang" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="handle">Handle</Label>
                                    <div className="relative">
                                        <span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">@</span>
                                        <Input id="handle" className="pl-5" defaultValue="linusdotmy" />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="bio">Bio</Label>
                                    <Textarea id="bio" className="min-h-16 resize-none" placeholder="Tell us a bit about yourself…" />
                                </div>
                                <Button size="sm">Save changes</Button>
                            </TabsContent>
                            <TabsContent value="billing" className="mt-3 space-y-2">
                                <div className="flex items-center gap-3 rounded-md border border-border px-3 py-2.5">
                                    <CreditCardIcon className="size-4 shrink-0 text-muted-foreground" />
                                    <div className="flex-1">
                                        <p className="text-xs font-medium">Visa ending in 4242</p>
                                        <p className="text-xs text-muted-foreground">Expires 04 / 28</p>
                                    </div>
                                    <Badge variant="secondary">Default</Badge>
                                </div>
                                <Button size="sm" variant="outline" className="w-full"><PlusIcon />Add payment method</Button>
                            </TabsContent>
                            <TabsContent value="security" className="mt-3 space-y-3">
                                <div className="space-y-1">
                                    <Label htmlFor="current-pw">Current password</Label>
                                    <Input id="current-pw" type="password" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="new-pw">New password</Label>
                                    <Input id="new-pw" type="password" />
                                </div>
                                <Button size="sm">Update password</Button>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>

                <Card className="break-inside-avoid">
                    <CardHeader>
                        <CardTitle>Accordion</CardTitle>
                        <CardDescription>Collapsible Q&amp;A and settings sections.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Accordion type="single" collapsible defaultValue="faq-1">
                            <AccordionItem value="faq-1">
                                <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                                <AccordionContent>We accept Visa, Mastercard, American Express, PayPal, and bank transfers. All payments are processed securely.</AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="faq-2">
                                <AccordionTrigger>Can I cancel my subscription?</AccordionTrigger>
                                <AccordionContent>You can cancel any time from your account settings. Your access continues until the end of your billing period.</AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="faq-3">
                                <AccordionTrigger>Is there a free trial?</AccordionTrigger>
                                <AccordionContent>Yes! All plans come with a 14-day free trial. No credit card required to get started.</AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>

                <Card className="break-inside-avoid">
                    <CardHeader>
                        <CardTitle>Plan Selection</CardTitle>
                        <CardDescription>Choose the plan that fits your workflow.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <RadioGroup defaultValue="pro" className="gap-2">
                            {[
                                { value: "starter", label: "Starter", desc: "Perfect for personal projects", price: "Free" },
                                { value: "pro", label: "Pro", desc: "For professionals and small teams", price: "$12/mo" },
                                { value: "enterprise", label: "Enterprise", desc: "Advanced features and SSO", price: "$49/mo" },
                            ].map(({ value, label, desc, price }) => (
                                <Label key={value} htmlFor={`plan-${value}`} className="flex cursor-pointer items-center gap-3 rounded-md border border-input p-3 has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5">
                                    <RadioGroupItem value={value} id={`plan-${value}`} />
                                    <div className="flex-1">
                                        <p className="font-medium">{label}</p>
                                        <p className="text-xs text-muted-foreground">{desc}</p>
                                    </div>
                                    <span className="text-xs font-semibold">{price}</span>
                                </Label>
                            ))}
                        </RadioGroup>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">Continue</Button>
                    </CardFooter>
                </Card>

                {/* Pagination */}
                <Card className="break-inside-avoid">
                    <CardHeader>
                        <CardTitle>Pagination</CardTitle>
                        <CardDescription>Navigate through paginated data.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
                                <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
                                <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
                                <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                                <PaginationItem><PaginationEllipsis /></PaginationItem>
                                <PaginationItem><PaginationLink href="#">8</PaginationLink></PaginationItem>
                                <PaginationItem><PaginationNext href="#" /></PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </CardContent>
                </Card>

                <Card className="break-inside-avoid">
                    <CardHeader>
                        <CardTitle>Appearance</CardTitle>
                        <CardDescription>Customize how the interface looks.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-0">
                        {[
                            { id: "dark", label: "Dark mode", desc: "Use dark theme across the interface.", checked: false },
                            { id: "compact", label: "Compact mode", desc: "Reduce spacing for denser layouts.", checked: true },
                            { id: "animations", label: "Animations", desc: "Enable transitions and animations.", checked: true },
                            { id: "sound", label: "Sound effects", desc: "Play sounds on actions.", checked: false },
                        ].map(({ id, label, desc, checked }, i, arr) => (
                            <div key={id}>
                                <div className="flex items-center justify-between py-3">
                                    <div className="space-y-0.5">
                                        <Label htmlFor={id}>{label}</Label>
                                        <p className="text-xs text-muted-foreground">{desc}</p>
                                    </div>
                                    <Switch id={id} defaultChecked={checked} />
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                <Card className="break-inside-avoid">
                    <CardHeader>
                        <CardTitle>Skeleton</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Skeleton className="size-10 shrink-0 rounded-full" />
                            <div className="flex-1 space-y-2">
                                <Skeleton className="h-3 w-32" />
                                <Skeleton className="h-3 w-20" />
                            </div>
                            <Skeleton className="h-6 w-14 rounded-md" />
                        </div>
                        <Skeleton className="h-28 w-full rounded-lg" />
                        <div className="space-y-2">
                            <Skeleton className="h-3 w-full" />
                            <Skeleton className="h-3 w-4/5" />
                            <Skeleton className="h-3 w-2/3" />
                        </div>
                    </CardContent>
                </Card>

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


                <Event
                    title="Payment Processed"
                    time="1m"
                    icon="✈️"

                    content="Your monthly subscription for the Pro tier has been successfully renewed."

                    fields={[
                        { name: "Amount", value: "$49.99" },
                        { name: "Card Ending In", value: "4242" },
                        { name: "Invoice ID", value: "INV-10924" }
                    ]}

                    events={[
                        {
                            icon: "✉️",
                            time: new Date().toISOString(),
                            content: "Receipt emailed"
                        },
                        {
                            icon: "🏦",
                            time: new Date().toISOString(),
                            content: "Payment settled",
                        }
                    ]}

                    data={{
                        id: "ch_3Mabc2...",
                        status: "success",
                        customer: {
                            id: "cus_Jklmno",
                            name: "linus",
                        }
                    }}

                    actions={[
                        { label: "View Invoice", url: "/invoices/INV-10924", type: "primary" },
                        { label: "Refund", url: "/refund", type: "secondary" }
                    ]}
                />

            </section>
        </div>
    )
}
