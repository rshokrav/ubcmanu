import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const events = [
  {
    id: 1,
    title: "MANU-IGEN-BMEG Pre E-Week Party",
    description: "The party before the storm",
    date: "January 9, 9:00 pm, IGEN Shop",
    image: "/ubceng-cairn.jpg",
    ctaText: "No RSVP required; just pull up.",
    ctaLink: "#",
  },
  {
    id: 2,
    title: "E-Week Opening Ceremony",
    description: "It all starts with a boat race",
    date: "January 11, 10:00 pm-12:00 am, Engineering Student Centre",
    image: "/boatrace.jpg",
    ctaText: "Fill out participation form!",
    ctaLink: "https://docs.google.com/forms/d/e/1FAIpQLSeDwuJdEryVU-z2UffyDLqPrmTHXMT08cHh_4Z6s9_5pq29xw/viewform",
  },
  {
    id: 3,
    title: "MANU-CHBE-BMEG Party",
    description: "2$ beers",
    date: "February 6, 7:00 pm, Engineering Student Centre",
    image: "/esc-party-copy.JPG",
    ctaText: "RSVP available soon!",
    ctaLink: "#",
  },
  {
    id: 4,
    title: "MANU-IGEN Ski Trip",
    description: "Overnight (maybe) ski trip",
    date: "To be announced",
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
