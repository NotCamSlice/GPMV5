"use client"

import { useState } from "react"
import { ProfileHeader } from "@/components/profile/profile-header"
import { ProfileStats } from "@/components/profile/profile-stats"
import { ProfileContent } from "@/components/profile/profile-content"
import { Shield, Star, Award } from "lucide-react"

// Mock profile data
const profileData = {
  username: "JoeGarth",
  displayName: "Joe Garth",
  avatar: "https://github.com/shadcn.png",
  coverImage: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1600&h=900&fit=crop",
  location: "Los Angeles, CA",
  joinDate: "January 2020",
  bio: "Professional 3D artist and vehicle modder. Creating high-quality police vehicle mods for GTA V since 2015. Founder of the LSPD Vehicle Pack series.",
  badges: [
    { name: "Verified Creator", icon: Shield },
    { name: "Top Rated", icon: Star },
    { name: "Featured Artist", icon: Award }
  ],
  socialLinks: [
    { name: "Website", url: "https://joegarth.com" },
    { name: "Twitter", url: "https://twitter.com/joegarth" },
    { name: "YouTube", url: "https://youtube.com/joegarth" }
  ],
  stats: {
    followers: 15000,
    downloads: 250000,
    rating: 4.9,
    reviews: 1250
  },
  mods: [
    {
      id: 1,
      title: "LSPD 2024 Mega Pack",
      thumbnail: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=450&fit=crop",
      description: "Complete overhaul of Los Santos Police Department with accurate vehicles, uniforms, and equipment.",
      downloads: 25000,
      rating: 4.9,
      reviews: 350,
      price: "Free"
    },
    {
      id: 2,
      title: "SAHP Vehicle Pack 2024",
      thumbnail: "https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?w=800&h=450&fit=crop",
      description: "San Andreas Highway Patrol vehicle pack with accurate markings and equipment.",
      downloads: 15000,
      rating: 4.8,
      reviews: 220,
      price: "$4.99"
    },
    {
      id: 3,
      title: "BCSO Complete Pack",
      thumbnail: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=800&h=450&fit=crop",
      description: "Blaine County Sheriff's Office vehicle and equipment pack.",
      downloads: 12000,
      rating: 4.7,
      reviews: 180,
      price: "Free"
    }
  ]
}

export default function ProfilePage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  return (
    <div className="min-h-screen bg-background">
      <ProfileHeader profile={profileData} />
      <div className="container mx-auto px-4 py-8">
        <ProfileStats profile={profileData} />
        <ProfileContent 
          profile={profileData} 
          viewMode={viewMode} 
          onViewModeChange={setViewMode} 
        />
      </div>
    </div>
  )
}