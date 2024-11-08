"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { 
  Shield, 
  Car, 
  Building2,
  Gamepad2,
  Trophy
} from "lucide-react"

const categories = [
  {
    name: "First Response",
    subtext: "Multiplayer gamemode",
    icon: Shield,
    href: "https://fr-mp.com/",
    external: true
  },
  {
    name: "Grand Theft Auto VI",
    subtext: "Coming Soon",
    icon: Gamepad2,
    href: "/vi",
    external: false
  },
  {
    name: "Grand Theft Auto V",
    subtext: "Home of San Andreas",
    icon: Car,
    href: "/v",
    external: false
  },
  {
    name: "Grand Theft Auto IV",
    subtext: "Home of Liberty City",
    icon: Building2,
    href: "/iv",
    external: false
  },
  {
    name: "Grand Theft Auto SA",
    subtext: "Veteran Community",
    icon: Trophy,
    href: "/sa",
    external: false
  }
]

export function CategoryNav() {
  return (
    <div className="w-full border-y border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto py-4">
        <ul className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {categories.map((category) => {
            const Icon = category.icon
            const LinkComponent = category.external ? 'a' : Link
            
            return (
              <li key={category.name}>
                <LinkComponent
                  href={category.href}
                  {...(category.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <div className="group h-24 relative rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <div className="absolute inset-0 p-4 flex items-center">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center group-hover:bg-accent transition-colors">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-semibold leading-tight">{category.name}</span>
                          <span className="text-sm text-muted-foreground">{category.subtext}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </LinkComponent>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}