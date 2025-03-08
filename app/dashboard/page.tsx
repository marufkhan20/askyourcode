"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, Code, Github, Plus, Settings } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"
import { RepositoryCard } from "@/components/repository-card"

export default function DashboardPage() {
  const [repositories, setRepositories] = useState<Repository[]>([
    {
      id: 1,
      name: "next-auth",
      description: "Authentication for Next.js",
      language: "TypeScript",
      stars: 18700,
      forks: 2300,
      lastUpdated: "2 days ago",
      isConnected: true,
    },
  ])

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <Button className="rounded-full">
            <Plus className="mr-2 h-4 w-4" /> Add Repository
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <motion.div
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Connected Repos</div>
                <div className="text-2xl font-bold">1</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Questions Asked</div>
                <div className="text-2xl font-bold">24</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Current Plan</div>
                <div className="text-xl font-bold">Free</div>
              </div>
            </div>
          </motion.div>
        </div>

        <Tabs defaultValue="repositories" className="w-full">
          <TabsList className="bg-white rounded-full border border-gray-200 p-1">
            <TabsTrigger value="repositories" className="rounded-full">
              Repositories
            </TabsTrigger>
            <TabsTrigger value="activity" className="rounded-full">
              Recent Activity
            </TabsTrigger>
          </TabsList>
          <TabsContent value="repositories" className="space-y-4 mt-6">
            <Alert className="bg-white border border-gray-100 rounded-xl">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Free Plan</AlertTitle>
              <AlertDescription className="flex items-center">
                You are currently on the free plan which allows 1 repository.
                <Button variant="link" className="h-auto p-0 ml-1 text-primary">
                  Upgrade to Premium
                </Button>
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repositories.map((repo) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <RepositoryCard repository={repo} />
                </motion.div>
              ))}

              <Card className="border border-dashed border-gray-200 bg-white rounded-xl shadow-sm">
                <CardContent className="flex flex-col items-center justify-center h-[220px] p-6">
                  <Button variant="outline" className="h-auto p-4 rounded-full mb-4 border-gray-200">
                    <Plus className="h-6 w-6" />
                  </Button>
                  <h3 className="text-lg font-medium">Add Repository</h3>
                  <p className="text-sm text-gray-500 text-center mt-2">
                    Connect a new GitHub repository to start asking questions
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="activity" className="mt-6">
            <Card className="bg-white rounded-xl shadow-sm border border-gray-100">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your recent interactions with the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activityItems.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 pb-4 border-b last:border-0"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="rounded-full bg-primary/10 p-2">{item.icon}</div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">{item.title}</p>
                        <p className="text-xs text-gray-500">{item.description}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs rounded-full">
                            {item.repository}
                          </Badge>
                          <span className="text-xs text-gray-500">{item.time}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

interface Repository {
  id: number
  name: string
  description: string
  language: string
  stars: number
  forks: number
  lastUpdated: string
  isConnected: boolean
}

const activityItems = [
  {
    icon: <Code className="h-4 w-4 text-primary" />,
    title: "Asked a question about authentication flow",
    description: "Where is the authentication middleware defined in this project?",
    repository: "next-auth",
    time: "2 hours ago",
  },
  {
    icon: <Github className="h-4 w-4 text-primary" />,
    title: "Connected a new repository",
    description: "Successfully connected repository to the platform",
    repository: "next-auth",
    time: "1 day ago",
  },
  {
    icon: <Settings className="h-4 w-4 text-primary" />,
    title: "Updated account settings",
    description: "Changed notification preferences",
    repository: "System",
    time: "3 days ago",
  },
]

