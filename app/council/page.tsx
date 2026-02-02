import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function CouncilPage() {
  // Define council members data
  const president = {
    name: "Muhammed Omar Khan",
    title: "President",
    image: "/omar.jpg?height=200&width=200",
  }

  const seniorMembers = [
    { name: "Juan Velasquez", title: "Vice President - Finance", image: "/juan.jpg?height=150&width=150" },
    {
      name: "Owen Dustin",
      title: "Vice President - Student Life, E-Week Representative",
      image: "/owen.jpeg?height=150&width=150",
    },
    { name: "Katrina Warren", title: "Vice President - Student Life", image: "/katrina.jpg?height=150&width=150" },
    { name: "Nicholas Ressl", title: "Vice President - Academic", image: "/nick.jpg?height=150&width=150" },
    { name: "Sam Zhang", title: "Vice President - Academic", image: "/sam-copy.JPG?height=150&width=150" },
    { name: "Hazimah Ahda Qolbi", title: "4-th Year Representative", image: "/ahda.jpg?height=150&width=150" },
    { name: "Kaito Dapremont Shimamura", title: "3rd-Year Representative", image: "/poser.JPG?height=150&width=150" },
    {
      name: "Iris Wong",
      title: "2nd-Year Representative, Clubroom Manager",
      image: "/iris.jpeg?height=150&width=150",
    },
    {
      name: "Spencer Hryciw",
      title: "Academic Representative",
      image: "/spencer.jpg?height=150&width=150",
    },
    {
      name: "Richie Kong",
      title: "Communications Representative",
      image: "/richie.JPG?height=150&width=150",
    },
  ]

  const regularMembers = [
    { name: "Ryan Shokravi", title: "Professional Development Representative" },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F0E4]">
      <Header />

      <main className="flex-1 py-12 px-6 md:px-12 bg-card">
        {/* Page Title */}
        <div className="max-w-7xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#680000] text-center mb-4 text-foreground">
            {"Meet the MANU Council"}      </h1>
        </div>

        {/* Council Members Section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-center mb-12 md:text-3xl overline font-medium">Council Members</h2>

          {/* President Card - Full Width */}
          <div className="mb-6">
            <div className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-8 bg-[rgba(252,251,247,1)]">
              <div className="flex items-center gap-8">
                <div className="relative w-24 h-24 md:w-40 md:h-40 flex-shrink-0">
                  <Image
                    src={president.image || "/placeholder.svg"}
                    alt={president.name}
                    width={160}
                    height={160}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-2xl mb:text-3xl font-bold mb-1">{president.name}</h3>
                  <p className="text-gray-600 text-md md:text-lg">{president.title}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Senior Members - 2 Column Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {seniorMembers.map((member, index) => (
              <div
                key={index}
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 bg-[rgba(252,251,247,1)]"
              >
                <div className="flex items-center gap-6">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-gray-600 text-sm">{member.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Regular Members - Full Width Thin Cards, No Photos */}
          <div className="space-y-4">
            {regularMembers.map((member, index) => (
              <div
                key={index}
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 bg-[rgba(252,251,247,1)]"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image src="/omar-joseph.jpg?height=400&width=1200" alt="Join Council" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center px-4">
                Interested in Joining the Council?
              </h2>
              <a href="#" className="text-2xl font-semibold underline hover:opacity-80 transition-opacity">
                Join us
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
