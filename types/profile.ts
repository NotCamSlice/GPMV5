import { LucideIcon } from "lucide-react"

export interface ProfileData {
  username: string
  displayName: string
  avatar: string
  coverImage: string
  location: string
  joinDate: string
  bio: string
  stats: {
    followers: number
    downloads: number
    rating: number
    reviews: number
  }
  badges: {
    name: string
    icon: LucideIcon
  }[]
  socialLinks: {
    name: string
    url: string
  }[]
  mods: {
    id: number
    title: string
    thumbnail: string
    description: string
    downloads: number
    rating: number
    reviews: number
    price: string
  }[]
}