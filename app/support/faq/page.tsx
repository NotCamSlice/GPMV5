"use client"

import { useState } from "react"
import { FAQHeader } from "@/components/faq-header"
import { FAQSidebar } from "@/components/faq-sidebar"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqSections = {
  general: {
    title: "General Questions",
    items: [
      {
        question: "What is GTAPoliceMods?",
        answer: "GTAPoliceMods is the premier platform for GTA police modification downloads and community engagement. We provide high-quality police-related mods, resources, and a space for the law enforcement roleplay community."
      },
      {
        question: "Is GTAPoliceMods free to use?",
        answer: "Yes, GTAPoliceMods is free to use. While some content creators may offer premium mods, most content is available free of charge."
      },
      {
        question: "Do I need the original GTA V game to use these mods?",
        answer: "Yes, you need a legitimate copy of GTA V to use our mods. We do not support pirated versions of the game."
      }
    ]
  },
  downloads: {
    title: "Downloads",
    items: [
      {
        question: "How do I download mods?",
        answer: "To download mods, simply browse our collection, click on the mod you're interested in, and click the download button. You may need to create an account for certain downloads."
      },
      {
        question: "Are the mods safe to download?",
        answer: "Yes, all mods undergo a verification process before being published. However, we recommend using antivirus software and downloading only from trusted creators."
      },
      {
        question: "Why can't I download certain mods?",
        answer: "Some mods may require an account, have specific game version requirements, or be temporarily unavailable. Check the mod's description for requirements."
      }
    ]
  },
  installation: {
    title: "Installation Help",
    items: [
      {
        question: "How do I install mods?",
        answer: "Each mod comes with installation instructions. Generally, you'll need to extract the files to your GTA V directory and follow any additional setup steps provided."
      },
      {
        question: "What do I do if a mod isn't working?",
        answer: "First, verify you've followed all installation steps correctly. Check for conflicts with other mods, and ensure your game version is compatible. You can also seek help in our community forums."
      }
    ]
  },
  account: {
    title: "Account & Profile",
    items: [
      {
        question: "How do I create an account?",
        answer: "Click the 'Sign In' button in the top right corner and select 'Create Account'. Follow the registration process by providing the required information."
      },
      {
        question: "Can I change my username?",
        answer: "Username changes are currently not supported to maintain consistency and prevent confusion in the community."
      }
    ]
  },
  uploading: {
    title: "Uploading Content",
    items: [
      {
        question: "How do I upload my own mods?",
        answer: "To upload mods, you need a verified creator account. Once verified, you can use our upload system to submit your content for review."
      },
      {
        question: "What are the requirements for uploading?",
        answer: "Mods must be original or properly credited, tested, and follow our content guidelines. Detailed documentation and support information must be provided."
      }
    ]
  }
}

export default function FAQPage() {
  const [activeSection, setActiveSection] = useState("general")

  return (
    <div className="min-h-screen bg-background">
      <FAQHeader />
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <FAQSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
          <div className="md:col-span-3">
            {Object.entries(faqSections).map(([key, section]) => (
              <div
                key={key}
                id={key}
                className="mb-8 scroll-mt-20"
              >
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {section.items.map((item, index) => (
                    <AccordionItem key={index} value={`${key}-${index}`}>
                      <AccordionTrigger className="text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}