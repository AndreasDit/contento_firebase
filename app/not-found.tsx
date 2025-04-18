import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex max-w-[64rem] flex-col items-center gap-8 text-center">
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg">
            <Link href="/">Go Back Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}