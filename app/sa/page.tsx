"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Car, Code2, Package, Brush } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    title: "Vehicle Models",
    icon: Car,
    description: "Classic vehicle models for GTA San Andreas",
    count: 890,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=400&fit=crop"
  },
  {
    title: "Vehicle Skins",
    icon: Brush,
    description: "Custom vehicle textures and liveries",
    count: 678,
    image: "https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?w=800&h=400&fit=crop"
  },
  {
    title: "Scripts",
    icon: Code2,
    description: "Game-enhancing scripts and modifications",
    count: 456,
    image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=800&h=400&fit=crop"
  },
  {
    title: "Misc",
    icon: Package,
    description: "Other miscellaneous modifications",
    count: 234,
    image: "https://images.unsplash.com/photo-1543465077-db45d34b88a5?w=800&h=400&fit=crop"
  }
]

export default function GTASAPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?w=1600&h=900&fit=crop"
            alt="GTA SA Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>
        <div className="relative container mx-auto h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">Grand Theft Auto: San Andreas</h1>
            <p className="text-xl text-white/90 mb-6">
              Relive the classic era with our collection of San Andreas police modifications.
              From vintage patrol cars to retro equipment, enhance your LSPD experience.
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

      {/* Categories Section */}
      <div className="container mx-auto py-12 px-4">
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
                href={`/game/sa/${category.title.toLowerCase().replace(/\s+/g, "-")}`}
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
      </div>
    </div>
  )
}