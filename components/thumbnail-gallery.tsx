"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ThumbnailGalleryProps {
  images: string[]
  interval?: number
}

export function ThumbnailGallery({ images, interval = 5000 }: ThumbnailGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, interval)

    return () => clearInterval(timer)
  }, [currentIndex, interval])

  const handlePrevious = () => {
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    setTimeout(() => setIsTransitioning(false), 300)
  }

  const handleNext = () => {
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsTransitioning(false), 300)
  }

  const handleThumbnailClick = (index: number) => {
    if (index === currentIndex) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 300)
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-video rounded-lg overflow-hidden group">
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-300",
            isTransitioning ? "opacity-50" : "opacity-100"
          )}
        >
          <Image
            src={images[currentIndex]}
            alt={`Screenshot ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <Button
            size="icon"
            variant="secondary"
            className="opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={handleNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto py-2 px-1">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={cn(
              "relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0 transition-all",
              currentIndex === index
                ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                : "opacity-70 hover:opacity-100"
            )}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}