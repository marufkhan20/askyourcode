"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FloatingDots } from "@/components/floating-dots"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("login")
  const searchParams = useSearchParams()

  useEffect(() => {
    const tab = searchParams.get("tab")
    if (tab === "register") {
      setActiveTab("register")
    }
  }, [searchParams])

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/dashboard"
    }, 1500)
  }

  const handleGitHubLogin = () => {
    setIsLoading(true)
    // Simulate GitHub OAuth
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/dashboard"
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 flex flex-col">
      <FloatingDots />

      <div className="container mx-auto px-4 py-6">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-primary transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card className="w-[400px] border-0 shadow-lg">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-2xl font-bold">Welcome to CodeQA</CardTitle>
              <CardDescription>
                {activeTab === "login" ? "Sign in to your account" : "Create a new account"}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Button
                variant="outline"
                onClick={handleGitHubLogin}
                disabled={isLoading}
                className="w-full rounded-full py-6 border-gray-200"
              >
                <Github className="mr-2 h-4 w-4" />
                Continue with GitHub
              </Button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">Or continue with email</span>
                </div>
              </div>
              <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="login" className="rounded-full">
                    Login
                  </TabsTrigger>
                  <TabsTrigger value="register" className="rounded-full">
                    Register
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                  <form onSubmit={handleEmailLogin}>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          placeholder="name@example.com"
                          type="email"
                          autoCapitalize="none"
                          autoComplete="email"
                          autoCorrect="off"
                          disabled={isLoading}
                          className="rounded-full py-6"
                        />
                      </div>
                      <div className="grid gap-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="password">Password</Label>
                          <Link href="#" className="text-xs text-primary hover:underline">
                            Forgot password?
                          </Link>
                        </div>
                        <Input
                          id="password"
                          placeholder="••••••••"
                          type="password"
                          autoCapitalize="none"
                          autoComplete="current-password"
                          autoCorrect="off"
                          disabled={isLoading}
                          className="rounded-full py-6"
                        />
                      </div>
                      <Button type="submit" disabled={isLoading} className="w-full rounded-full py-6 mt-2">
                        {isLoading ? "Signing in..." : "Sign In"}
                      </Button>
                    </div>
                  </form>
                </TabsContent>
                <TabsContent value="register">
                  <form onSubmit={handleEmailLogin}>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="register-email">Email</Label>
                        <Input
                          id="register-email"
                          placeholder="name@example.com"
                          type="email"
                          autoCapitalize="none"
                          autoComplete="email"
                          autoCorrect="off"
                          disabled={isLoading}
                          className="rounded-full py-6"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="register-password">Password</Label>
                        <Input
                          id="register-password"
                          placeholder="••••••••"
                          type="password"
                          autoCapitalize="none"
                          autoComplete="new-password"
                          autoCorrect="off"
                          disabled={isLoading}
                          className="rounded-full py-6"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                        <Input
                          id="confirm-password"
                          placeholder="••••••••"
                          type="password"
                          autoCapitalize="none"
                          autoComplete="new-password"
                          autoCorrect="off"
                          disabled={isLoading}
                          className="rounded-full py-6"
                        />
                      </div>
                      <Button type="submit" disabled={isLoading} className="w-full rounded-full py-6 mt-2">
                        {isLoading ? "Creating account..." : "Create Account"}
                      </Button>
                    </div>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex flex-col">
              <p className="mt-2 text-xs text-center text-gray-500">
                By continuing, you agree to our{" "}
                <Link href="#" className="text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

