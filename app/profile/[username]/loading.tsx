export default function Loading() {
  return (
    <div className="min-h-screen bg-background animate-pulse">
      <div className="h-48 md:h-64 bg-muted" />
      <div className="container mx-auto px-4">
        <div className="relative -mt-20 mb-8">
          <div className="w-32 h-32 rounded-full bg-muted" />
        </div>
        <div className="space-y-4">
          <div className="h-8 w-64 bg-muted rounded" />
          <div className="h-4 w-48 bg-muted rounded" />
          <div className="h-20 w-full max-w-3xl bg-muted rounded" />
        </div>
      </div>
    </div>
  )
}