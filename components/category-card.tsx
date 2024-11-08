"use client"

import { Card } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface CategoryCardProps {
  title: string
  icon: LucideIcon
  count: number
  image: string
  mainCategory: string
}

export function CategoryCard({
  title,
  icon: Icon,
  count,
  image,
  mainCategory
}: CategoryCardProps) {
  const slug = `${mainCategory.toLowerCase().replace(/\s+/g, "-")}/${title.toLowerCase().replace(/\s+/g, "-")}`

  return (
    <Link href={`/${slug}`}>
      <Card className="group overflow-hidden hover:border-primary/50 transition-colors">
        <div className="relative">
          {/* Background Image */}
          <div className="h-48 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/50" />
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Content Overlay */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-background/90 flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/90">{count.toLocaleString()} mods</span>
                <span className="text-sm text-white/75 group-hover:text-white transition-colors">
                  Browse All →
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  )
}