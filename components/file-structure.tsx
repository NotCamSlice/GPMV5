"use client"

import { useState } from "react"
import { ChevronRight, File, Folder } from "lucide-react"
import { cn } from "@/lib/utils"

interface FileNode {
  name: string
  type: "file" | "directory"
  children?: FileNode[]
}

interface FileStructureProps {
  structure: FileNode
}

function FileTreeNode({ node, level = 0, isRoot = false }: { node: FileNode; level?: number; isRoot?: boolean }) {
  const [isOpen, setIsOpen] = useState(isRoot)
  const hasChildren = (node.type === "directory" || isRoot) && node.children?.length > 0

  return (
    <div style={{ paddingLeft: isRoot ? 0 : `${level * 20}px` }}>
      <div
        className={cn(
          "flex items-center py-1 hover:bg-accent rounded-sm cursor-pointer",
          hasChildren && "group"
        )}
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        {hasChildren ? (
          <ChevronRight
            className={cn(
              "h-4 w-4 shrink-0 transition-transform",
              isOpen && "rotate-90"
            )}
          />
        ) : (
          <File className="h-4 w-4 shrink-0 text-muted-foreground" />
        )}
        <span className="ml-1 text-sm">{node.name}</span>
      </div>
      {hasChildren && isOpen && (
        <div>
          {node.children?.map((child, index) => (
            <FileTreeNode key={index} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export function FileStructure({ structure }: FileStructureProps) {
  return (
    <div className="font-mono">
      <FileTreeNode node={structure} isRoot={true} />
    </div>
  )
}