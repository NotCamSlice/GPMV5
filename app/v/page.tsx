"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, ChevronLeft, ChevronRight, Download, Star, Clock, Car, Code2, User2, Music, Package, Brush } from "lucide-react"
import { GalleryGrid } from "@/components/gallery-grid"
import Link from "next/link"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=400&fit=crop",
    title: "LSPD 2024 Pack",
    author: "JohnDoe"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?w=800&h=400&fit=crop",
    title: "SAHP Patrol Pack",
    author: "JaneSmith"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=800&h=400&fit=crop",
    title: "BCSO Vehicle Pack",
    author: "RobertJohnson"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1543465077-db45d34b88a5?w=800&h=400&fit=crop",
    title: "EUP Pack 2024",
    author: "AliceWilliams"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=400&fit=crop",
    title: "Emergency Lighting",
    author: "DavidBrown"
  }
]

const latestFiles = [
  {
    id: "lspd-2024-pack",
    title: "LSPD 2024 Mega Pack",
    author: "JohnDoe",
    description: "Complete LSPD vehicle and equipment pack for 2024",
    thumbnail: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=400&fit=crop",
    downloads: 15234,
    rating: 4.8,
    fileSize: "2.3 GB",
    uploadDate: "2 hours ago"
  },
  {
    id: "sahp-2024",
    title: "SAHP 2024 Vehicle Pack",
    author: "JaneSmith",
    description: "State Highway Patrol vehicles with accurate markings",
    thumbnail: "https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?w=800&h=400&fit=crop",
    downloads: 8456,
    rating: 4.6,
    fileSize: "1.8 GB",
    uploadDate: "5 hours ago"
  },
  {
    id: "bcso-pack",
    title: "BCSO Complete Pack",
    author: "RobertJohnson",
    description: "Blaine County Sheriff's Office vehicle and equipment pack",
    thumbnail: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=800&h=400&fit=crop",
    downloads: 6789,
    rating: 4.7,
    fileSize: "2.1 GB",
    uploadDate: "1 day ago"
  },
  {
    id: "eup-2024",
    title: "EUP Pack 2024",
    author: "AliceWilliams",
    description: "Updated EUP pack with new uniforms and equipment",
    thumbnail: "https://images.unsplash.com/photo-1543465077-db45d34b88a5?w=800&h=400&fit=crop",
    downloads: 12345,
    rating: 4.9,
    fileSize: "1.5 GB",
    uploadDate: "2 days ago"
  }
]

const categories = [
  {
    title: "Vehicle Models",
    icon: Car,
    description: "High-quality vehicle models for GTA V",
    count: 2345,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=400&fit=crop"
  },
  {
    title: "Vehicle Skins",
    icon: Brush,
    description: "Custom vehicle textures and liveries",
    count: 1567,
    image: "https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?w=800&h=400&fit=crop"
  },
  {
    title: "Scripts & Plugins",
    icon: Code2,
    description: "Game-enhancing scripts and modifications",
    count: 890,
    image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=800&h=400&fit=crop"
  },
  {
    title: "Character",
    icon: User2,
    description: "Character models and customizations",
    count: 678,
    image: "https://images.unsplash.com/photo-1543465077-db45d34b88a5?w=800&h=400&fit=crop"
  },
  {
    title: "Audio",
    icon: Music,
    description: "Custom audio and sound modifications",
    count: 456,
    image: "https://images.unsplash.com/photo-1543465077-db45d34b88a5?w=800&h=400&fit=crop"
  },
  {
    title: "Misc",
    icon: Package,
    description: "Other miscellaneous modifications",
    count: 234,
    image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=800&h=400&fit=crop"
  }
]

export default function GTA5Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://assets.gtapolicemods.com/logos/gpm_lore_background.png"
            alt="GTA V Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>
        <div className="relative container mx-auto h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">Grand Theft Auto V</h1>
            <p className="text-xl text-white/90 mb-6">
              Explore the largest collection of police modifications for GTA V. From vehicles to equipment,
              find everything you need to enhance your law enforcement experience.
            </p>
            <div className="flex gap-4">
              <Button size="lg">Browse All Mods</Button>
              <Button size="lg" variant="outline">
                Upload Content
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Camera className="h-6 w-6" />
            <h2 className="text-3xl font-bold">Latest Gallery</h2>
          </div>
          <Button variant="outline">View All Images</Button>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {galleryImages.map((image) => (
            <Link key={image.id} href={`/gallery/${image.id}`}>
              <Card className="overflow-hidden group">
                <div className="relative aspect-video">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm font-medium truncate">{image.title}</p>
                    <p className="text-xs text-white/80">by {image.author}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Categories</h2>
          <Button variant="outline">View All Categories</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link 
                key={category.title} 
                href={`/game/v/${category.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <Card className="group overflow-hidden hover:border-primary/50 transition-colors">
                  <div className="relative">
                    <div className="h-48 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/50" />
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 p-6 flex flex-col justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-background/90 flex items-center justify-center">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                            <p className="text-sm text-white/75">{category.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-white/90">
                            {category.count.toLocaleString()} mods
                          </span>
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
          })}
        </div>
      </section>

      {/* Latest Files Section */}
      <section className="container mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Clock className="h-6 w-6" />
            <h2 className="text-3xl font-bold">Latest Files</h2>
          </div>
          <Button>View All Files</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {latestFiles.map((file) => (
            <Link key={file.id} href={`/mods/${file.id}`}>
              <Card className="group overflow-hidden hover:border-primary/50 transition-colors">
                <div className="flex h-full">
                  {/* Thumbnail */}
                  <div className="w-1/3 relative">
                    <div className="absolute inset-0">
                      <img
                        src={file.thumbnail}
                        alt={file.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-2/3 p-4 flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-lg line-clamp-1">{file.title}</h3>
                        <p className="text-sm text-muted-foreground">by {file.author}</p>
                      </div>
                      <Badge variant="secondary" className="ml-2">
                        {file.fileSize}
                      </Badge>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">
                      {file.description}
                    </p>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <Download className="h-4 w-4 mr-1" />
                          <span>{file.downloads.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 mr-1 text-yellow-400" />
                          <span>{file.rating}</span>
                        </div>
                      </div>
                      <span className="text-muted-foreground">{file.uploadDate}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}