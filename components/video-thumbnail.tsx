"use client"

import { useState } from "react"
import { Play } from "lucide-react"

interface VideoThumbnailProps {
  thumbnailUrl: string
  videoUrl: string
  title: string
}

export function VideoThumbnail({ thumbnailUrl, videoUrl, title }: VideoThumbnailProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  return (
    <div className="w-full h-full relative">
      {!isPlaying ? (
        <>
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center group"
          >
            <div className="w-20 h-20 rounded-full bg-background/90 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="h-8 w-8 text-primary" />
            </div>
          </button>
        </>
      ) : (
        <iframe
          src={videoUrl}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  )
}