"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: string
  language: string
  showLineNumbers?: boolean
  className?: string
}

export function CodeBlock({ code, language, showLineNumbers = true, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const lines = code.split("\n")

  return (
    <div className={cn("relative rounded-xl border border-gray-200 bg-white overflow-hidden", className)}>
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-gray-50">
        <div className="text-sm text-gray-500">{language}</div>
        <Button variant="ghost" size="sm" className="h-8 gap-1 rounded-full" onClick={copyToClipboard}>
          {copied ? (
            <>
              <Check className="h-4 w-4 text-green-500" />
              <span className="text-green-500">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              <span>Copy</span>
            </>
          )}
        </Button>
      </div>
      <div className="relative overflow-auto p-4">
        <pre className="text-sm font-mono">
          {lines.map((line, i) => (
            <div key={i} className="table-row">
              {showLineNumbers && <span className="table-cell text-right pr-4 select-none text-gray-400">{i + 1}</span>}
              <span className="table-cell">{line}</span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  )
}

