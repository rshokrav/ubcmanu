import Link from "next/link"
import { Button } from "@/components/ui/button"

export function UpcomingEventsSection() {
  const events = [
    "Beef & Pizza: Term 1 Course Review",
    "Tequilab Party by MANU-BMEG-CHBE",
    "MANU-IGEN Ski Trip",
  ]

  return (
    <section className="bg-[var(--off-white)] py-16 px-6 md:px-12 lg:px-24 text-card-foreground bg-popover rounded-none">
      <div className="max-w-7xl mx-auto bg-card">
        <h2 className="text-5xl font-bold mb-8 md:text-5xl">Upcoming Events</h2>

        <Link href="/events">
          <Button
            variant="outline"
            className="mb-12 rounded-full border-2 border-black bg-transparent hover:bg-black hover:text-white px-6 text-base font-medium transition-colors py-2"
          >
            Learn More
          </Button>
        </Link>

        <div className="space-y-6">
          {events.map((event, index) => (
            <Link
              key={index}
              href="#"
              className="block border-black bg-white hover:bg-gray-50 transition-colors py-2 px-4 border rounded-none border-t-0 border-r-0 border-l-2 border-b-0"
            >
              <h3 className="text-xl md:text-2xl font-medium">{event}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
