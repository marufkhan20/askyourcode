"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Copy, FileCode, Send } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"
import { CodeBlock } from "@/components/code-block"

export default function AskPage() {
  const [question, setQuestion] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [hasResponse, setHasResponse] = useState(false)
  const [selectedRepo, setSelectedRepo] = useState("next-auth")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim()) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setHasResponse(true)
    }, 2000)
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Ask About Your Code</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-gray-100">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Repository</label>
                  <Select value={selectedRepo} onValueChange={setSelectedRepo}>
                    <SelectTrigger className="rounded-full border-gray-200">
                      <SelectValue placeholder="Select a repository" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      <SelectItem value="next-auth">next-auth</SelectItem>
                      <SelectItem value="react-query" disabled>
                        react-query (Premium)
                      </SelectItem>
                      <SelectItem value="tailwindcss" disabled>
                        tailwindcss (Premium)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Your Question</label>
                  <Textarea
                    placeholder="e.g., Where is the authentication middleware defined?"
                    className="min-h-[120px] rounded-xl border-gray-200"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                  />
                </div>

                <Button type="submit" className="w-full rounded-full" disabled={isLoading || !question.trim()}>
                  {isLoading ? (
                    "Analyzing your code..."
                  ) : (
                    <>
                      Ask Question <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                <div className="text-xs text-gray-500">
                  <p>Example questions:</p>
                  <ul className="list-disc pl-4 space-y-1 mt-1">
                    <li>Where is the authentication middleware defined?</li>
                    <li>How does the login function work?</li>
                    <li>What are all the API endpoints in this project?</li>
                  </ul>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="lg:col-span-2">
            {!hasResponse ? (
              <div className="h-full flex items-center justify-center border rounded-xl p-6 bg-white/50 border-gray-100">
                <div className="text-center space-y-2">
                  <FileCode className="h-12 w-12 mx-auto text-gray-400" />
                  <h3 className="text-lg font-medium">Ask a question to get started</h3>
                  <p className="text-sm text-gray-500 max-w-md">
                    Select a repository and ask a question about your code. Our AI will analyze your codebase and
                    provide detailed answers.
                  </p>
                </div>
              </div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <Card className="bg-white rounded-xl shadow-sm border border-gray-100">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-medium">Authentication Middleware</h3>
                          <p className="text-sm text-gray-500">Found in 2 files</p>
                        </div>
                        <Button variant="outline" size="sm" className="rounded-full border-gray-200">
                          <Copy className="h-4 w-4 mr-2" /> Copy
                        </Button>
                      </div>

                      <Tabs defaultValue="file1">
                        <TabsList className="bg-gray-100 rounded-full p-1">
                          <TabsTrigger value="file1" className="rounded-full">
                            middleware.ts
                          </TabsTrigger>
                          <TabsTrigger value="file2" className="rounded-full">
                            auth.ts
                          </TabsTrigger>
                        </TabsList>
                        <TabsContent value="file1" className="mt-4">
                          <CodeBlock
                            code={`import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })
  
  // Protect routes that require authentication
  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  
  return NextResponse.next()
}`}
                            language="typescript"
                            showLineNumbers
                          />
                          <div className="mt-4 text-sm">
                            <p className="text-gray-500">
                              <strong>File path:</strong> /middleware.ts
                            </p>
                            <p className="mt-2">
                              This middleware checks for a valid authentication token on protected routes and redirects
                              to the login page if no token is found.
                            </p>
                            <Button variant="link" size="sm" className="px-0 mt-1 text-primary">
                              View full file <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                          </div>
                        </TabsContent>
                        <TabsContent value="file2" className="mt-4">
                          <CodeBlock
                            code={`import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: 'read:user user:email repo',
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token
      }token, account}) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken
      return session
    },
  },
}

export default NextAuth(authOptions)`}
                            language="typescript"
                            showLineNumbers
                          />
                          <div className="mt-4 text-sm">
                            <p className="text-gray-500">
                              <strong>File path:</strong> /app/api/auth/[...nextauth]/route.ts
                            </p>
                            <p className="mt-2">
                              This file configures NextAuth.js with GitHub as the authentication provider and sets up
                              the necessary callbacks for token handling.
                            </p>
                            <Button variant="link" size="sm" className="px-0 mt-1 text-primary">
                              View full file <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                          </div>
                        </TabsContent>
                      </Tabs>

                      <div className="bg-gray-50 p-4 rounded-xl">
                        <h4 className="font-medium mb-2">Additional Context</h4>
                        <p className="text-sm text-gray-600">
                          The authentication in this project is implemented using NextAuth.js. The middleware.ts file
                          handles route protection by checking for valid authentication tokens, while auth.ts configures
                          the GitHub OAuth provider and token handling.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

