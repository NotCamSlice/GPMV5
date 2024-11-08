"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Camera, Eye, Heart } from "lucide-react"
import Link from "next/link"

interface GalleryImage {
  id: string
  url: string
  title: string
  author: string
  album: string
  likes: number
  views: number
}

interface GalleryGridProps {
  images: GalleryImage[]
}

export function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-5 gap-4">
      {images.map((image) => (
        <Card 
          key={image.id}
          className="group overflow-hidden hover:border-primary/50 transition-colors"
        >
          <Link href={`/gallery/${image.id}`}>
            <div className="relative aspect-[4/3]">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-2">
                  <h3 className="text-white text-sm font-medium truncate">{image.title}</h3>
                  <div className="flex items-center justify-between text-white/80 text-xs">
                    <span>by {image.author}</span>
                    <Badge variant="secondary" className="bg-black/50 text-xs">
                      {image.album}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3 mt-1 text-white/80 text-xs">
                    <div className="flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      <span>{image.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      <span>{image.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </Card>
      ))}
    </div>
  )
}