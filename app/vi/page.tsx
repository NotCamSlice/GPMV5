"use client"

import { VideoThumbnail } from "@/components/video-thumbnail"
import { Button } from "@/components/ui/button"

export default function GTA6Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Video */}
      <section className="relative">
        <div className="container mx-auto py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <VideoThumbnail
              thumbnailUrl="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f7eab33a4989ce5f0cd89c70723909b3.jpg"
              videoUrl="https://www.youtube.com/embed/QdBZY2fkU-0"
              title="GTA 6 Trailer"
            />
            
            <div className="mt-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Grand Theft Auto VI
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Experience the next chapter in the Grand Theft Auto series. 
                Coming soon with groundbreaking police and emergency services modifications.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg">
                  Join the Waitlist
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Preparing for Launch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team is getting ready to bring you the most advanced and realistic police modifications
            for GTA VI. Stay tuned for updates and be the first to access our upcoming content.
          </p>
        </div>
      </section>
    </div>
  )
}