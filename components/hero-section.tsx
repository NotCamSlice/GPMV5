"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight, User, Gamepad, Newspaper } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const heroContent = [
  {
    id: "featured",
    title: "LSPD 2024 Mega Pack",
    description: "Complete overhaul of Los Santos Police Department with accurate vehicles, uniforms, and equipment.",
    image: "https://images.unsplash.com/photo-1543465077-db45d34b88a5?w=1600&h=900&fit=crop&q=100",
    badge: "FEATURED",
    downloads: "3.2k",
    rating: "4.9",
    slug: "lspd-2024-mega-pack",
    type: "mod"
  },
  {
    id: "news",
    title: "New California Highway Patrol Pack",
    description: "Introducing the most detailed CHP vehicle pack ever created for GTA V.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1600&h=900&fit=crop&q=100",
    badge: "NEWS",
    slug: "community-updates/chp-vehicle-pack",
    type: "news"
  },
  {
    id: "creator",
    title: "Creator Spotlight: ModMaster",
    description: "Meet the creator behind some of our most popular police vehicle mods.",
    image: "https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?w=1600&h=900&fit=crop&q=100",
    badge: "CREATOR",
    downloads: "15.2k",
    rating: "4.9",
    slug: "modmaster-collection",
    type: "creator"
  },
  {
    id: "gamemode",
    title: "First Response Multiplayer",
    description: "Join our official roleplay server featuring custom police missions and realistic patrols.",
    image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=1600&h=900&fit=crop&q=100",
    badge: "GAMEMODE",
    slug: "frmp-server",
    type: "gamemode"
  }
]

export function HeroSection() {
  const [activeContent, setActiveContent] = useState(heroContent[0])
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleContentChange = (content: typeof heroContent[0]) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveContent(content)
      setIsTransitioning(false)
    }, 300)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = heroContent.findIndex(content => content.id === activeContent.id)
      const nextIndex = (currentIndex + 1) % heroContent.length
      handleContentChange(heroContent[nextIndex])
    }, 5000)

    return () => clearInterval(interval)
  }, [activeContent])

  const getButtonText = (content: typeof heroContent[0]) => {
    switch (content.type) {
      case 'news':
        return 'Read More'
      case 'creator':
        return 'Go to Profile'
      case 'gamemode':
        return 'Answer the Call'
      default:
        return 'Download Now'
    }
  }

  return (
    <section className="relative bg-background py-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Featured Content */}
          <div className="lg:col-span-3">
            <Link href={`/mods/${activeContent.slug}`}>
              <div className={cn(
                "h-[440px] relative overflow-hidden rounded-lg transition-opacity duration-300 cursor-pointer group",
                isTransitioning ? "opacity-50" : "opacity-100"
              )}>
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={activeContent.image}
                    alt={activeContent.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge className="mb-4">{activeContent.badge}</Badge>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {activeContent.title}
                  </h1>
                  <p className="text-white/90 mb-4 max-w-2xl">
                    {activeContent.description}
                  </p>
                  <div className="flex items-center space-x-4">
                    <Button>
                      {getButtonText(activeContent)}
                    </Button>
                    {activeContent.type === 'mod' && (
                      <div className="flex items-center text-white/90 space-x-4">
                        <span className="flex items-center">
                          {activeContent.downloads} Downloads
                        </span>
                        <span className="flex items-center">
                          Rating: {activeContent.rating}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Side Content */}
          <div className="lg:col-span-1 grid grid-rows-4 gap-4 h-[440px]">
            {heroContent.map((content) => (
              <Card 
                key={content.id}
                className={cn(
                  "p-4 cursor-pointer transition-colors",
                  activeContent.id === content.id ? "border-primary" : "hover:border-primary/50"
                )}
                onClick={() => handleContentChange(content)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{content.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {content.badge === "FEATURED" && "Latest featured mods"}
                      {content.badge === "NEWS" && "Community updates"}
                      {content.badge === "CREATOR" && "Top community members"}
                      {content.badge === "GAMEMODE" && "Come Check us out"}
                    </p>
                  </div>
                  {content.badge === "FEATURED" && <ChevronRight className="h-5 w-5 text-muted-foreground" />}
                  {content.badge === "NEWS" && <Newspaper className="h-5 w-5 text-muted-foreground" />}
                  {content.badge === "CREATOR" && <User className="h-5 w-5 text-muted-foreground" />}
                  {content.badge === "GAMEMODE" && <Gamepad className="h-5 w-5 text-muted-foreground" />}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}