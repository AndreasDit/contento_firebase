import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container flex max-w-[64rem] flex-col items-center gap-8 py-8 text-center">
      <h1 className="font-heading text-4xl sm:text-6xl">About Contento Firebase</h1>
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        Contento Firebase is a modern web application that combines the power of Next.js with Firebase's
        backend services. Our platform provides seamless content management and real-time functionality.
      </p>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Key Features</h2>
        <ul className="list-none space-y-2 text-muted-foreground">
          <li>⚡️ Next.js 13 App Router</li>
          <li>🔥 Firebase Integration</li>
          <li>🎨 Tailwind CSS Styling</li>
          <li>📱 Responsive Design</li>
          <li>🔒 Authentication Ready</li>
        </ul>
      </div>
      <div className="flex gap-4">
        <Button asChild size="lg">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </Button>
      </div>
    </div>
  )
}