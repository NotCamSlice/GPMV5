import { Card } from "@/components/ui/card"
import { Download, Star, MessageSquare } from "lucide-react"

interface ProfileStatsProps {
  profile: {
    stats: {
      followers: number
      downloads: number
      rating: number
      reviews: number
    }
  }
}

export function ProfileStats({ profile }: ProfileStatsProps) {
  const stats = [
    {
      label: "Downloads",
      value: profile.stats.downloads.toLocaleString(),
      icon: Download
    },
    {
      label: "Rating",
      value: profile.stats.rating.toFixed(1),
      icon: Star
    },
    {
      label: "Reviews",
      value: profile.stats.reviews.toLocaleString(),
      icon: MessageSquare
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <Card key={index} className="p-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}