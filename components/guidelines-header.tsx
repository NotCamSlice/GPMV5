"use client"

import { Button } from "@/components/ui/button"
import { ScrollText, ArrowLeft } from "lucide-react"
import Link from "next/link"

export function GuidelinesHeader() {
  return (
    <div className="border-b border-border/40">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <div className="flex items-center space-x-2">
              <ScrollText className="h-5 w-5" />
              <h1 className="text-xl font-semibold">Guidelines</h1>
            </div>
          </div>
          <div>
            <Button variant="outline" size="sm">
              Download PDF
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}