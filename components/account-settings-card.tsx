"use client"

import { CreditCardIcon, PlusIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function AccountSettingsCard() {
    return (
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
    )
}
