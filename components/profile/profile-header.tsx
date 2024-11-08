"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Globe, Twitter, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ProfileHeaderProps {
  profile: {
    username: string
    displayName: string
    avatar: string
    coverImage: string
    location: string
    joinDate: string
    bio: string
    badges: Array<{
      name: string
      icon: any
    }>
    socialLinks: Array<{
      name: string
      url: string
    }>
  }
}

const socialIcons = {
  Website: Globe,
  Twitter: Twitter,
  Facebook: Facebook,
  Instagram: Instagram,
  LinkedIn: Linkedin,
  YouTube: Youtube
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <div className="relative">
      {/* Cover Image */}
      <div className="h-48 md:h-64 overflow-hidden">
        <img
          src={profile.coverImage}
          alt="Profile Cover"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="relative -mt-20 mb-8">
          {/* Profile Info */}
          <div className="flex flex-col md:flex-row items-start md:items-end gap-4">
            {/* Avatar */}
            <Avatar className="w-32 h-32 border-4 border-background">
              <AvatarImage src={profile.avatar} alt={profile.displayName} />
              <AvatarFallback>{profile.displayName[0]}</AvatarFallback>
            </Avatar>

            {/* Profile Details */}
            <div className="flex-1 space-y-2">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <h1 className="text-2xl font-bold">{profile.displayName}</h1>
                <div className="flex flex-wrap gap-2">
                  {profile.badges.map((badge, index) => {
                    const Icon = badge.icon
                    return (
                      <Badge key={index} variant="secondary" className="flex items-center gap-1">
                        <Icon className="h-3 w-3" />
                        {badge.name}
                      </Badge>
                    )
                  })}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {profile.location}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Joined {profile.joinDate}
                </div>
              </div>
              <p className="max-w-3xl text-muted-foreground">{profile.bio}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 md:self-start">
              <Button>Follow</Button>
              <Button variant="outline">Message</Button>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-6 inline-flex items-center gap-2 bg-black/80 backdrop-blur-sm rounded-lg p-2">
            {profile.socialLinks.map((link, index) => {
              const Icon = socialIcons[link.name as keyof typeof socialIcons] || Globe
              return (
                <Link
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "p-2 rounded-md transition-colors",
                    "hover:bg-white/10",
                    "text-white/80 hover:text-white"
                  )}
                  title={link.name}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}