"use client"

import { Button } from "@/components/ui/button"
import { HelpCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"

export function FAQHeader() {
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
              <HelpCircle className="h-5 w-5" />
              <h1 className="text-xl font-semibold">Frequently Asked Questions</h1>
            </div>
          </div>
          <div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/support/contact">
                Need More Help?
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}