import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ModPageClient } from "./client"

// This is required for static export
export function generateStaticParams() {
  return [
    { slug: "lspd-2024-mega-pack" },
    { slug: "chp-vehicle-pack" },
    { slug: "modmaster-collection" },
    { slug: "gpm-roleplay-server" }
  ]
}

const modData = {
  title: "Military Airport (Military Base, Military Props)",
  author: "FreshCan",
  category: "Environments",
  subcategory: "Military / Warzone",
  rating: 4.5,
  reviews: 16,
  downloads: 2500,
  views: 15000,
  fileSize: "2.3 GB",
  completionState: "Released",
  publishDate: "July 5, 2024",
  license: "Standard License",
  description: `Military Airport pack made by Freshcan 3D team offers high quality assets and assemblies allowing you to create a military airport environment for games and cinematics. It can be implemented to the game levels by copying the assemblies into the scene. All materials of buildings are tileable. The pack includes buildings like Hangar, Helideck, Fuel Silo, Watchtower etc., props and airbase roads which complements the military airport environment.`,
  credits: [
    {
      name: "FreshCan",
      role: "Lead Developer",
      contribution: "Project lead and main development"
    },
    {
      name: "ModelMaster",
      role: "3D Artist",
      contribution: "Vehicle models and textures"
    },
    {
      name: "AudioPro",
      role: "Sound Designer",
      contribution: "Custom sound effects and ambient audio"
    }
  ],
  tags: ["Fps", "Base", "Weaponry", "Shooter", "Container", "Airport", "Thirdperson", "Tileable", "Realistic", "Building", "Fresh", "Bullet", "Storage", "Military", "Hangar"],
  images: [
    "https://images.unsplash.com/photo-1543465077-db45d34b88a5?w=1600&h=900&fit=crop&q=100",
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1600&h=900&fit=crop&q=100",
    "https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?w=1600&h=900&fit=crop&q=100",
    "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=1600&h=900&fit=crop&q=100"
  ],
  supportedVersions: {
    singleplayer: "1.67 or higher",
    fivem: "Latest version"
  }
}

export default function ModPage({ params }: { params: { slug: string } }) {
  return <ModPageClient modData={modData} />
}