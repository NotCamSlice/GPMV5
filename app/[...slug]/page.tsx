import { notFound } from "next/navigation"
import GTA5Page from "@/app/v/page"
import GTA4Page from "@/app/iv/page"
import GTASAPage from "@/app/sa/page"
import GTA6Page from "@/app/vi/page"

// This is required for static export
export function generateStaticParams() {
  return [
    // Profile pages
    { slug: ["profile"] },
    { slug: ["profile", "JoeGarth"] },
    
    // GTA 6
    { slug: ["vi"] },
    { slug: ["vi", "vehicle-models"] },
    { slug: ["vi", "vehicle-skins"] },
    { slug: ["vi", "scripts-plugins"] },
    { slug: ["vi", "character"] },
    { slug: ["vi", "audio"] },
    { slug: ["vi", "misc"] },
    
    // GTA 5
    { slug: ["v"] },
    { slug: ["v", "vehicle-models"] },
    { slug: ["v", "vehicle-skins"] },
    { slug: ["v", "scripts-plugins"] },
    { slug: ["v", "character"] },
    { slug: ["v", "audio"] },
    { slug: ["v", "misc"] },
    
    // GTA 4
    { slug: ["iv"] },
    { slug: ["iv", "vehicle-models"] },
    { slug: ["iv", "vehicle-skins"] },
    { slug: ["iv", "plugins"] },
    { slug: ["iv", "character"] },
    { slug: ["iv", "audio"] },
    { slug: ["iv", "misc"] },
    
    // GTA SA
    { slug: ["sa"] },
    { slug: ["sa", "vehicle-models"] },
    { slug: ["sa", "vehicle-skins"] },
    { slug: ["sa", "scripts"] },
    { slug: ["sa", "misc"] },
  ]
}

export default function CategoryPage({ params }: { params: { slug: string[] } }) {
  if (!params.slug?.length) {
    notFound()
  }

  const [mainCategory, subCategory] = params.slug

  // If there's no subcategory, render the main game page
  if (!subCategory) {
    switch (mainCategory) {
      case "v":
        return <GTA5Page />
      case "iv":
        return <GTA4Page />
      case "sa":
        return <GTASAPage />
      case "vi":
        return <GTA6Page />
      default:
        return notFound()
    }
  }

  // If there is a subcategory, render the category listing
  return (
    <div className="container mx-auto py-8">
      <h1>Category: {mainCategory} - {subCategory}</h1>
      {/* Add your category listing content here */}
    </div>
  )
}