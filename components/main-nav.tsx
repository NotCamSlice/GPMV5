"use client"

import Link from "next/link"
import Image from "next/image"
import { Upload, Users, Search, Newspaper, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Mock user state - replace with your auth logic
const user = {
  isLoggedIn: false, // Set to true to test logged-in state
  username: "JohnDoe",
  avatar: "https://github.com/shadcn.png" // Replace with actual user avatar URL
}

export function MainNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-[1600px] mx-auto px-4 flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Image
              src="https://assets.gtapolicemods.com/logos/gpmlogobright.png"
              alt="GTAPoliceMods Logo"
              width={180}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Search Bar - Centered */}
        <div className="flex-1 max-w-xl mx-auto px-8">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search mods, creators..."
              className="w-full pl-8 bg-muted/50"
            />
          </div>
        </div>

        {/* Navigation Items - Right Aligned */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="https://gtapolicemods.com/newswire/" target="_blank" rel="noopener noreferrer">
              <Newspaper className="mr-2 h-4 w-4" />
              Blogs
            </Link>
          </Button>
          <Button variant="ghost" size="sm">
            <Upload className="mr-2 h-4 w-4" />
            Upload
          </Button>
          <div className="relative">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Users className="mr-2 h-4 w-4" />
                  Community
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-40"
                sideOffset={8}
              >
                <DropdownMenuItem className="px-2 py-2 text-sm cursor-pointer hover:bg-accent focus:bg-accent">
                  <Link href="/community/creators" className="w-full">
                    Content Creators
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-2 py-2 text-sm cursor-pointer hover:bg-accent focus:bg-accent">
                  <Link href="/community/forums" className="w-full">
                    Forums
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-2 py-2 text-sm cursor-pointer hover:bg-accent focus:bg-accent">
                  <Link href="/community/discord" className="w-full">
                    Discord Server
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-2 py-2 text-sm cursor-pointer hover:bg-accent focus:bg-accent">
                  <Link href="/community/events" className="w-full">
                    Events
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-2 hover:opacity-80">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.avatar} alt={user.username} />
                  <AvatarFallback>
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{user.username}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56" sideOffset={8}>
                <DropdownMenuItem>
                  <Link href="/profile" className="w-full">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/profile/settings" className="w-full">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/my-mods" className="w-full">My Mods</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/profile/connections" className="w-full">Connections</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-500 focus:text-red-500">
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
        </div>
      </div>
    </header>
  )
}