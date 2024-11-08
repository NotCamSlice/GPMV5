"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  HelpCircle,
  Download,
  Settings,
  User,
  Upload,
} from "lucide-react"

const sections = [
  {
    id: "general",
    title: "General Questions",
    icon: HelpCircle,
  },
  {
    id: "downloads",
    title: "Downloads",
    icon: Download,
  },
  {
    id: "installation",
    title: "Installation Help",
    icon: Settings,
  },
  {
    id: "account",
    title: "Account & Profile",
    icon: User,
  },
  {
    id: "uploading",
    title: "Uploading Content",
    icon: Upload,
  },
]

interface FAQSidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export function FAQSidebar({ activeSection, setActiveSection }: FAQSidebarProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
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
          <h2 className="text-sm font-semibold mb-4">FAQ Sections</h2>
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