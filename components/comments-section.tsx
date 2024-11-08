"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import {
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  ThumbsUp,
  Flag
} from "lucide-react"

interface Comment {
  id: number
  author: string
  avatar?: string
  content: string
  date: string
  likes: number
}

// Mock comments data
const mockComments: Comment[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  author: `User${i + 1}`,
  avatar: undefined,
  content: `This is an amazing mod! I've been using it for a while now and it works perfectly. The attention to detail is impressive. ${i + 1}`,
  date: new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString(),
  likes: Math.floor(Math.random() * 100)
}))

const COMMENTS_PER_PAGE = 5

export function CommentsSection() {
  const [currentPage, setCurrentPage] = useState(1)
  const [newComment, setNewComment] = useState("")

  const totalPages = Math.ceil(mockComments.length / COMMENTS_PER_PAGE)
  const startIndex = (currentPage - 1) * COMMENTS_PER_PAGE
  const currentComments = mockComments.slice(startIndex, startIndex + COMMENTS_PER_PAGE)

  const handleSubmitComment = () => {
    if (!newComment.trim()) return
    // Add comment logic here
    setNewComment("")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Comments
        </h2>
        <span className="text-muted-foreground">{mockComments.length} comments</span>
      </div>

      {/* Comment Form */}
      <Card className="p-4">
        <div className="space-y-4">
          <Textarea
            placeholder="Leave a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="min-h-[100px]"
          />
          <div className="flex justify-end">
            <Button onClick={handleSubmitComment}>
              Post Comment
            </Button>
          </div>
        </div>
      </Card>

      {/* Comments List */}
      <div className="space-y-4">
        {currentComments.map((comment) => (
          <Card key={comment.id} className="p-4">
            <div className="flex gap-4">
              <Avatar>
                <AvatarImage src={comment.avatar} />
                <AvatarFallback>{comment.author[0].toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="font-semibold">{comment.author}</h3>
                    <p className="text-sm text-muted-foreground">{comment.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      {comment.likes}
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Flag className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-sm">{comment.content}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter(page => {
            const diff = Math.abs(page - currentPage)
            return diff === 0 || diff === 1 || page === 1 || page === totalPages
          })
          .map((page, i, arr) => (
            <div key={page} className="flex items-center">
              {i > 0 && arr[i - 1] !== page - 1 && (
                <span className="mx-2">...</span>
              )}
              <Button
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            </div>
          ))}
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}