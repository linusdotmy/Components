"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import AccountSettingsCard from "@/components/account-settings-card"
import AccordionCard from "@/components/accordion-card"
import AnalyticsCard from "@/components/analytics-card"
import AppearanceCard from "@/components/appearance-card"
import ClaimableBalanceCard from "@/components/claimable-balance-card"
import ContributionHistoryCard from "@/components/contribution-history-card"
import DistributeTrackCard from "@/components/distribute-track-card"
import EmptyCard from "@/components/empty-card"
import Event from "@/components/event"
import MilestoneCard from "@/components/milestone-card"
import NotificationsCard from "@/components/notifications-card"
import PaginationCard from "@/components/pagination-card"
import PayoutThresholdCard from "@/components/payout-threshold-card"
import PlanSelectionCard from "@/components/plan-selection-card"
import RecentTransactionsCard from "@/components/recent-transactions-card"
import SkeletonCard from "@/components/skeleton-card"
import TransferFundsCard from "@/components/transfer-funds-card"
import CalendarCard from "@/components/calendar-card"
import UiCardDemoCard from "@/components/ui-card-demo-card"

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

                <CalendarCard />
                <UiCardDemoCard />
                <ContributionHistoryCard />
                <MilestoneCard />
                <ClaimableBalanceCard />
                <TransferFundsCard />
                <PayoutThresholdCard />
                <NotificationsCard />
                <AnalyticsCard />
                <DistributeTrackCard />
                <RecentTransactionsCard />
                <AccountSettingsCard />
                <AccordionCard />
                <PlanSelectionCard />
                <PaginationCard />
                <AppearanceCard />
                <SkeletonCard />
                <EmptyCard />

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
