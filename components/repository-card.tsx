import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, MessageSquare, Star } from "lucide-react"

interface RepositoryProps {
  repository: {
    id: number
    name: string
    description: string
    language: string
    stars: number
    forks: number
    lastUpdated: string
    isConnected: boolean
  }
}

export function RepositoryCard({ repository }: RepositoryProps) {
  return (
    <Card className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Github className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">{repository.name}</CardTitle>
          </div>
          <Badge variant={repository.isConnected ? "default" : "outline"} className="rounded-full">
            {repository.isConnected ? "Connected" : "Disconnected"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500 line-clamp-2 h-10">{repository.description}</p>
        <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-blue-500" />
            <span>{repository.language}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5" />
            <span>{repository.stars.toLocaleString()}</span>
          </div>
          <div>
            <span>Updated {repository.lastUpdated}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        <Button variant="outline" size="sm" className="rounded-full border-gray-200">
          <Github className="mr-2 h-4 w-4" /> View on GitHub
        </Button>
        <Link href="/dashboard/ask">
          <Button size="sm" className="rounded-full">
            <MessageSquare className="mr-2 h-4 w-4" /> Ask
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

