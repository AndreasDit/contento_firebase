import { Button } from "@/components/ui/button"

export default function ManageTweetsPage() {
  return (
    <div className="container flex max-w-[64rem] flex-col items-center gap-8 py-8 text-center">
      <h1 className="font-heading text-4xl sm:text-6xl">Manage Tweets</h1>
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        Efficiently manage and schedule your tweets with our integrated Twitter management system.
        Monitor engagement, schedule posts, and analyze performance all in one place.
      </p>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="list-none space-y-2 text-muted-foreground">
          <li>📅 Tweet Scheduling</li>
          <li>📊 Analytics Dashboard</li>
          <li>🔄 Auto-posting</li>
          <li>📱 Mobile Optimization</li>
          <li>📈 Engagement Tracking</li>
        </ul>
      </div>
      <div className="flex gap-4">
        <Button size="lg">
          Start Managing
        </Button>
      </div>
    </div>
  )
}