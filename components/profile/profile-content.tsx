"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Star, MessageSquare, LayoutGrid, List } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ProfileContentProps {
  profile: {
    mods: Array<{
      id: number
      title: string
      thumbnail: string
      description: string
      downloads: number
      rating: number
      reviews: number
      price: string
    }>
  }
  viewMode: "grid" | "list"
  onViewModeChange: (mode: "grid" | "list") => void
}

export function ProfileContent({ profile, viewMode, onViewModeChange }: ProfileContentProps) {
  return (
    <div className="space-y-6">
      {/* View Toggle */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Content</h2>
        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="icon"
            onClick={() => onViewModeChange("grid")}
          >
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="icon"
            onClick={() => onViewModeChange("list")}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Content Grid/List */}
      <div className={cn(
        "grid gap-6",
        viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
      )}>
        {profile.mods.map((mod) => (
          <Link key={mod.id} href={`/mods/${mod.id}`}>
            <Card className="overflow-hidden group hover:border-primary/50 transition-colors">
              <div className={cn(
                viewMode === "grid" ? "flex flex-col" : "flex"
              )}>
                {/* Thumbnail */}
                <div className={cn(
                  "relative",
                  viewMode === "grid" ? "aspect-video w-full" : "w-48 h-32"
                )}>
                  <img
                    src={mod.thumbnail}
                    alt={mod.title}
                    className="w-full h-full object-cover"
                  />
                  {mod.price !== "Free" && (
                    <Badge className="absolute top-2 right-2">
                      {mod.price}
                    </Badge>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 p-4">
                  <h3 className="font-semibold mb-2">{mod.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {mod.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Download className="h-4 w-4" />
                      {mod.downloads.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      {mod.rating}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      {mod.reviews}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}