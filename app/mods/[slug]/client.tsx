"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, Share2, Flag, Star, Eye, FileText, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ThumbnailGallery } from "@/components/thumbnail-gallery"
import { DownloadTerms } from "@/components/download-terms"
import { FileStructure } from "@/components/file-structure"
import { CommentsSection } from "@/components/comments-section"
import { useState } from "react"
import { Toaster } from "@/components/ui/toaster"

// Mock file structure data
const fileStructure = {
  name: "2024 LSPD Pack.zip",
  type: "file",
  children: [
    {
      name: "LSPD Pack",
      type: "directory",
      children: [
        {
          name: "Vehicles",
          type: "directory",
          children: [
            { name: "police.ytd", type: "file" },
            { name: "police2.ytd", type: "file" },
            { name: "police3.ytd", type: "file" }
          ]
        },
        {
          name: "ELS",
          type: "directory",
          children: [
            { name: "police.xml", type: "file" },
            { name: "police2.xml", type: "file" }
          ]
        },
        { name: "Credits.txt", type: "file" },
        { name: "ReadMe.txt", type: "file" }
      ]
    }
  ]
}

interface ModPageClientProps {
  modData: {
    title: string
    author: string
    category: string
    subcategory: string
    rating: number
    reviews: number
    downloads: number
    views: number
    fileSize: string
    completionState: string
    publishDate: string
    license: string
    description: string
    credits: {
      role: string
      name: string
      contribution: string
    }[]
    images: string[]
    supportedVersions: {
      singleplayer: string
      fivem: string
    }
  }
}

export function ModPageClient({ modData }: ModPageClientProps) {
  const [showTerms, setShowTerms] = useState(false)

  const handleDownload = () => {
    setShowTerms(true)
  }

  const handleAcceptTerms = () => {
    console.log("Starting download...")
    setShowTerms(false)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <Toaster />
      <DownloadTerms 
        isOpen={showTerms}
        onClose={() => setShowTerms(false)}
        onAccept={handleAcceptTerms}
      />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Image Gallery */}
          <div className="mb-8">
            <ThumbnailGallery images={modData.images} />
          </div>

          {/* Description Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-muted-foreground">{modData.description}</p>
            </div>

            {/* Credits Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Credits</h2>
              <div className="grid gap-4">
                {modData.credits.map((credit, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-center gap-4">
                      <Users className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <h3 className="font-semibold">{credit.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {credit.role} - {credit.contribution}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Supported Versions */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Included formats</h3>
              <div className="space-y-4">
                <Card className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Singleplayer</h4>
                      <p className="text-sm text-muted-foreground">
                        Supported game version: {modData.supportedVersions.singleplayer}
                      </p>
                    </div>
                    <Button variant="outline" className="ml-auto">
                      See details
                    </Button>
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">FiveM</h4>
                      <p className="text-sm text-muted-foreground">
                        Supported versions: {modData.supportedVersions.fivem}
                      </p>
                    </div>
                    <Button variant="outline" className="ml-auto">
                      See details
                    </Button>
                  </div>
                </Card>
              </div>
            </div>

            {/* Comments Section */}
            <CommentsSection />
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="space-y-6 sticky top-24">
            {/* Author Info */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <Link 
                  href={`/creator/${modData.author}`}
                  className="font-semibold hover:text-primary"
                >
                  {modData.author}
                </Link>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="h-3 w-3 mr-1 text-yellow-400" />
                  <span>{modData.rating}</span>
                  <span className="mx-1">·</span>
                  <span>{modData.reviews} reviews</span>
                </div>
              </div>
            </div>

            {/* Category */}
            <div>
              <Link 
                href={`/category/${modData.category.toLowerCase()}`}
                className="text-primary hover:underline"
              >
                {modData.category}
              </Link>
              <span className="mx-2">›</span>
              <Link 
                href={`/category/${modData.subcategory.toLowerCase()}`}
                className="text-primary hover:underline"
              >
                {modData.subcategory}
              </Link>
            </div>

            {/* Download Buttons */}
            <div className="space-y-3">
              <Button className="w-full" size="lg" onClick={handleDownload}>
                <Download className="mr-2 h-4 w-4" /> Download
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                Add to My Library
              </Button>
            </div>

            {/* Stats */}
            <Card className="p-4">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Views</span>
                  <span>{modData.views.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Downloads</span>
                  <span>{modData.downloads.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">File Size</span>
                  <span>{modData.fileSize}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Completion State</span>
                  <Badge variant="outline">{modData.completionState}</Badge>
                </div>
              </div>
            </Card>

            {/* File Structure */}
            <Card className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Inside the File
                </h3>
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </div>
              <FileStructure structure={fileStructure} />
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="flex-1">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="flex-1">
                <Flag className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}