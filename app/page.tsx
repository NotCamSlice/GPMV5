{/* Update imports */}
import { HeroSection } from "@/components/hero-section"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Star, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Featured Mods */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Mods</h2>
            <Button variant="ghost">View All</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Link href={`/mods/lspd-vehicle-pack-${i}`} key={i}>
                <Card className="overflow-hidden group hover:border-primary/50 transition-colors cursor-pointer">
                  <div className="aspect-video relative bg-muted">
                    <img
                      src={`https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=450&fit=crop`}
                      alt="Police car mod"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="backdrop-blur-sm bg-background/80">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">LSPD 2024 Vehicle Pack</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Complete police vehicle pack with accurate LSPD liveries and emergency lighting
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Download className="h-4 w-4 mr-1" />
                          <span className="text-sm">2.3k</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 mr-1" />
                          <span className="text-sm">4.9</span>
                        </div>
                      </div>
                      <Button size="sm">Download</Button>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Trending Now</h2>
            <Button variant="ghost">See More</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Link href={`/mods/trending-mod-${i}`} key={i}>
                <Card className="group hover:border-primary/50 transition-colors cursor-pointer">
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="px-2 py-1">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Trending
                      </Badge>
                      <span className="text-sm text-muted-foreground">2 hours ago</span>
                    </div>
                    <h3 className="font-semibold mb-2">Enhanced Police Radio</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Realistic police radio communications and dispatch system
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}