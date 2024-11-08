"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"

interface DownloadTermsProps {
  isOpen: boolean
  onClose: () => void
  onAccept: () => void
}

export function DownloadTerms({ isOpen, onClose, onAccept }: DownloadTermsProps) {
  const { toast } = useToast()
  const [isAccepting, setIsAccepting] = useState(false)

  const handleDecline = () => {
    toast({
      title: "Download cancelled",
      description: "You must accept the developer terms to download this content.",
      variant: "destructive",
      duration: 3000,
    })
    onClose()
  }

  const handleAccept = () => {
    setIsAccepting(true)
    onClose() // Close the dialog immediately
    
    const toastInstance = toast({
      title: "Thank you for accepting the terms",
      description: "Your download will start automatically in 5 seconds.",
      className: "bg-green-500 text-white border-green-600",
      duration: 5000,
    })
    
    setTimeout(() => {
      onAccept()
      setIsAccepting(false)
    }, 5000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Developer Terms</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Terms of Use</h3>
            <p>By downloading this content, you agree to the following terms:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You may not redistribute this content without explicit permission from the creator.</li>
              <li>You must credit the original creator when using this content in your projects.</li>
              <li>Commercial use requires a separate license agreement.</li>
              <li>Modifications are allowed for personal use only.</li>
              <li>The creator maintains all intellectual property rights.</li>
            </ul>
            <h3 className="text-lg font-semibold pt-4">Usage Guidelines</h3>
            <p>When using this content, please ensure:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Content is used within the specified game version requirements.</li>
              <li>You maintain the integrity of the original work.</li>
              <li>You do not use the content in a way that suggests endorsement.</li>
              <li>You comply with all applicable laws and regulations.</li>
            </ul>
          </div>
        </ScrollArea>
        <div className="flex justify-end gap-4 mt-4">
          <Button variant="outline" onClick={handleDecline}>
            Decline
          </Button>
          <Button 
            onClick={handleAccept} 
            disabled={isAccepting}
          >
            {isAccepting ? "Starting download..." : "Accept & Download"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}