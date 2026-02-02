import Link from "next/link"
import { Button } from "@/components/ui/button"

export function UpcomingEventsSection() {
  const events = [
    "MANU-IGEN-BMEG Pre E-Week Party",
    "E-Week Opening Ceremony",
    "MANU-CHBE-BMEG Party",
    "MANU-IGEN Ski Trip",
  ]

  return (
    <section className="bg-[var(--off-white)] py-8 md:py-16 px-4 md:px-6 lg:px-24 text-card-foreground bg-popover rounded-none">
      <div className="max-w-7xl mx-auto bg-card">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8">Upcoming Events</h2>

        <Link href="/events">
          <Button
            variant="outline"
            className="mb-6 md:mb-12 rounded-full border-2 border-black bg-transparent hover:bg-black hover:text-white px-4 md:px-6 text-sm md:text-base font-medium transition-colors py-1.5 md:py-2"
          >
            Learn More
          </Button>
        </Link>

        <div className="space-y-4 md:space-y-6">
          {events.map((event, index) => (
            <Link
              key={index}
              href="#"
              className="block border-black bg-white hover:bg-gray-50 transition-colors py-1.5 md:py-2 px-3 md:px-4 border rounded-none border-t-0 border-r-0 border-l-2 border-b-0"
            >
              <h3 className="text-lg md:text-xl lg:text-2xl font-medium">{event}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
