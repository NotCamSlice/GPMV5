"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  Shield, 
  AlertTriangle, 
  ThumbsDown, 
  Users, 
  FileText, 
  ShieldAlert,
  HelpCircle
} from "lucide-react"
import { useState, useEffect } from "react"

const sections = [
  {
    id: "general",
    title: "General Guidelines",
    icon: FileText,
  },
  {
    id: "outside",
    title: "Outside Policy",
    icon: Shield,
  },
  {
    id: "punishment",
    title: "Punishment Policy",
    icon: AlertTriangle,
  },
  {
    id: "low-quality",
    title: "Low Quality Posts",
    icon: ThumbsDown,
  },
  {
    id: "harassment",
    title: "Member Harassment",
    icon: Users,
  },
  {
    id: "content",
    title: "User Content",
    icon: FileText,
  },
  {
    id: "moderation",
    title: "Moderation Actions",
    icon: ShieldAlert,
  },
  {
    id: "support",
    title: "Support & Help",
    icon: HelpCircle,
  },
]

export function GuidelinesSidebar() {
  const [activeSection, setActiveSection] = useState("general")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-20% 0px -80% 0px"
      }
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100 // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
      setActiveSection(id)
    }
  }

  return (
    <div className="md:border-r border-border/40 pr-6">
      <ScrollArea className="h-[calc(100vh-12rem)] pr-4">
        <div className="space-y-2">
          <h2 className="text-sm font-semibold mb-4">Guidelines Sections</h2>
          {sections.map((section) => {
            const Icon = section.icon
            return (
              <Button
                key={section.id}
                variant="ghost"
                className={cn(
                  "w-full justify-start",
                  activeSection === section.id && "bg-muted"
                )}
                onClick={() => scrollToSection(section.id)}
              >
                <Icon className="mr-2 h-4 w-4" />
                {section.title}
              </Button>
            )
          })}
        </div>
      </ScrollArea>
    </div>
  )
}