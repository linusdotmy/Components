"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AccordionCard() {
    return (
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
    )
}
