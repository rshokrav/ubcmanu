import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Toyota Factory Tour @ Cambridge, ON",
    description: "Wanna see the magic of TPS on a 3-day trip to Toronto? Sign up for a chance to come on the trip!",
    date: "April 1st-4th, Cambridge & Toronto",
    image: "/TMMC.jpeg",
    ctaText: "Sign up for the trip lottery.",
    ctaLink: "https://docs.google.com/forms/d/e/1FAIpQLSdKr-MvmueEZ2ZUuGdipJ75wDyPpwmCINr7rxGvsXD19ybaQw/viewform?usp=header",
  },
  {
    id: 2,
    title: "Storm the Wall with MANU",
    description: "Whether you wanna get competetive (and take on MECH) or you're just trying to have fun, represent MANU in UBC Rec's Storm the Wall.",
    date: "March 22-25, UBC Campus",
    image: "/storm-the-wall.jpeg",
    ctaText: "Sign up by March 13",
    ctaLink: "https://docs.google.com/forms/d/e/1FAIpQLScwot2QZzR80DhS4XCEB1SRv77Z96l1_RDKIyGxRAJLCXD1Xw/viewform?usp=dialog",
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
