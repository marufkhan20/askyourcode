"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CreditCard, Github } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"

export default function SettingsPage() {
  const [loading, setLoading] = useState(false)

  const handleSave = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 1000)
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Settings</h1>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="bg-white rounded-full border border-gray-200 p-1 w-full md:w-auto">
            <TabsTrigger value="profile" className="rounded-full">
              Profile
            </TabsTrigger>
            <TabsTrigger value="account" className="rounded-full">
              Account
            </TabsTrigger>
            <TabsTrigger value="billing" className="rounded-full">
              Billing
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-4 mt-6">
            <Card className="bg-white rounded-xl shadow-sm border border-gray-100">
              <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>Manage your profile information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="John Doe" className="rounded-full border-gray-200" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" defaultValue="john.doe@example.com" className="rounded-full border-gray-200" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input id="company" placeholder="Your company name" className="rounded-full border-gray-200" />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleSave} disabled={loading} className="rounded-full">
                  {loading ? "Saving..." : "Save Changes"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="account" className="space-y-4 mt-6">
            <Card className="bg-white rounded-xl shadow-sm border border-gray-100">
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>Manage your account settings and connected services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Connected Accounts</h3>
                  <motion.div
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex items-center gap-4">
                      <Github className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">GitHub</p>
                        <p className="text-sm text-gray-500">johndoe</p>
                      </div>
                    </div>
                    <Badge className="rounded-full">Connected</Badge>
                  </motion.div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Notifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="email-notifications">Email Notifications</Label>
                        <p className="text-sm text-gray-500">Receive email notifications about your account</p>
                      </div>
                      <Switch id="email-notifications" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="marketing-emails">Marketing Emails</Label>
                        <p className="text-sm text-gray-500">Receive emails about new features and updates</p>
                      </div>
                      <Switch id="marketing-emails" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="space-y-4 mt-6">
            <Card className="bg-white rounded-xl shadow-sm border border-gray-100">
              <CardHeader>
                <CardTitle>Billing</CardTitle>
                <CardDescription>Manage your subscription and payment methods</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Current Plan</h3>
                    <Badge className="rounded-full">Free</Badge>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h4 className="font-medium">Free Plan</h4>
                        <p className="text-sm text-gray-500">1 repository, basic features</p>
                      </div>
                      <Button variant="outline" size="sm" className="rounded-full border-gray-200">
                        Upgrade
                      </Button>
                    </div>
                    <div className="text-sm space-y-2">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-gray-400" />
                        <span>Limited to 1 GitHub repository</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-gray-400" />
                        <span>Basic Q&A functionality</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Payment Methods</h3>
                  <div className="p-4 border border-gray-200 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <CreditCard className="h-6 w-6 text-primary" />
                      <p className="text-gray-500">No payment methods added</p>
                    </div>
                    <Button variant="outline" size="sm" className="rounded-full border-gray-200">
                      Add Method
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Billing History</h3>
                  <div className="p-4 border border-gray-200 rounded-xl text-center text-gray-500">
                    <p>No billing history available</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

