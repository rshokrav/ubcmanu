import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Beef & Pizza: Term 1 Course Review",
    description: "Got beef with your courses? Chat about it over some pizza!🍕 Whether you’re locked in or completely cooked, come by",
    date: "February 3, 2:00 pm, Frank Forward 217",
    image: "/beefandpizza.png",
    ctaText: "RSVP",
    ctaLink: "https://forms.gle/VNYA7PSggghwba7N7",
  },
  {
    id: 2,
    title: "Tequilab Party by MANU-CHBE-BMEG",
    description: "Disco at the lab with tons of tequila",
    date: "February 6, 7:00 pm, Engineering Student Centre",
    image: "/tequilab.jpg",
    ctaText: "RSVP & Tickets",
    ctaLink: "https://www.bouncelife.com/events/696f0969efd1a7d2bcf50960",
  },
  {
    id: 3,
    title: "MANU Ski Day",
    description: "Nightskiing at Cypress. Date and Time is tentative due to weather conditions.",
    date: "Tentatively February 7, 5:00-10:00 pm, Cypress Mountain",
    image: "/aerial-whistler.jpeg",
    ctaText: "Interest form",
    ctaLink:
      "https://docs.google.com/forms/d/1_bx6Tk7rPlpZX05DViiDFNLdrROSmUyoah0G4WYklqY/viewform?edit_requested=true",
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F0E4]">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="py-16 px-6 lg:px-12 bg-card">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">MANU Events</h1>
            <p className="text-lg md:text-xl text-gray-600">We've always got exciting events lined up</p>
          </div>
        </section>

        {/* Events Grid */}
        <section className="pb-20 px-6 lg:px-12 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
                >
                  {/* Event Image */}
                  <div className="relative w-full h-48 bg-gray-100">
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                  </div>

                  {/* Event Content */}
                  <div className="p-6 flex flex-col flex-1 bg-[rgba(252,251,246,1)]">
                    <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                    <p className="text-gray-700 mb-4 flex-1">{event.description}</p>
                    <p className="text-sm text-gray-600 mb-4">{event.date}</p>

                    {/* CTA Link */}
                    <Link
                      href={event.ctaLink}
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#680000] hover:opacity-70 transition-opacity text-foreground"
                    >
                      {event.ctaText}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
