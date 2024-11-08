"use client"

import Link from "next/link"
import { Facebook, Twitter, Youtube, Instagram, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container max-w-[1600px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">GTAPoliceMods</h3>
            <p className="text-sm text-muted-foreground">
              The premier platform for GTA police modification downloads and community engagement.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                <Youtube className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Downloads</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/downloads/featured" className="hover:text-primary transition-colors">Featured Mods</Link></li>
              <li><Link href="/downloads/popular" className="hover:text-primary transition-colors">Most Popular</Link></li>
              <li><Link href="/downloads/recent" className="hover:text-primary transition-colors">Recently Added</Link></li>
              <li><Link href="/downloads/categories" className="hover:text-primary transition-colors">Categories</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Community</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/community/creators" className="hover:text-primary transition-colors">Content Creators</Link></li>
              <li><Link href="/community/forums" className="hover:text-primary transition-colors">Forums</Link></li>
              <li><Link href="/community/discord" className="hover:text-primary transition-colors">Discord Server</Link></li>
              <li><Link href="/community/events" className="hover:text-primary transition-colors">Events</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/support/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/support/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/support/guidelines" className="hover:text-primary transition-colors">Guidelines</Link></li>
              <li><Link href="/support/dmca" className="hover:text-primary transition-colors">DMCA</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} GTAPoliceMods. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link href="/legal/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/legal/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link href="/legal/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}