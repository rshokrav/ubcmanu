import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SocietyServicesSection() {
  // Duplicate the cards array to create seamless loop
  const cards = [
    {
      id: 1,
      title: "an Official Feedback Channel for the Program",
      // link: "Provide Feedback",
      label: "We are",
      url: "#", // INSERT LINK HERE: Use "/page-name" for internal pages or "https://example.com" for external URLs
    },
    {
      id: 2,
      title: "Plan MANU's Participation in E-Week",
      link: "Learn more about E-Week",
      label: "",
      url: "https://www.canva.com/design/DAG4dFT6uPw/cCMGm7G5g7pWvzGkHKFrqQ/view?utm_content=DAG4dFT6uPw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd91457089b", // INSERT LINK HERE: Use "/page-name" for internal pages or "https://example.com" for external URLs
    },
    {
      id: 3,
      title: "Maintain the MANU Clubroom",
      link: "Visit the Clubroom",
      label: "",
      url: "/clubroom", // INSERT LINK HERE: Use "/page-name" for internal pages or "https://example.com" for external URLs
    },
    {
      id: 4,
      title: "Organize Industry Networking Events",
      // link: "View Past Events",
      label: "",
      url: "#", // INSERT LINK HERE: Use "/page-name" for internal pages or "https://example.com" for external URLs
    },
    {
      id: 5,
      title: "Provide Academic Support Services",
      link: "Get Help",
      label: "",
      url: "#", // INSERT LINK HERE: Use "/page-name" for internal pages or "https://example.com" for external URLs
    },
    {
      id: 6,
      title: "Advocate for Student Interests",
      link: "Learn More",
      label: "",
      url: "#", // INSERT LINK HERE: Use "/page-name" for internal pages or "https://example.com" for external URLs
    },
  ]

  // Create duplicated array for infinite scroll
  const duplicatedCards = [...cards, ...cards]

  return (
    <section className="py-16 md:py-24 bg-[var(--off-white)] bg-card text-card-foreground">
      <div className="container mx-auto px-4">
        {/* Heading and subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">What does the Society do?</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            The Society provides many services to MANU students
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link href="/council">
              <Button className="bg-black text-white hover:bg-black/90 transition-colors rounded-full px-6 py-2 text-base font-medium">
                Get Involved
              </Button>
            </Link>
            <Link href="https://linktr.ee/ubcmanu">
              <Button
                variant="outline"
                className="bg-transparent border-2 border-black text-black hover:bg-black/5 transition-colors rounded-full px-6 py-2 text-base font-medium"
              >
                See MANU Linktr.ee
              </Button>
            </Link>
          </div>
        </div>

        {/* Scrolling Cards Container */}
        <div className="overflow-hidden relative">
          <div className="flex gap-6 animate-scroll">
            {duplicatedCards.map((card, index) => (
              <div
                key={`${card.id}-${index}`}
                className="flex-shrink-0 w-[300px] md:w-[350px] lg:w-[400px] bg-[var(--card-blue)] rounded-2xl p-8 md:p-10 bg-blue-100"
              >
                <div className="mb-4">
                  <span className="text-sm font-medium text-burgundy">{card.label}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-6 min-h-[80px] md:min-h-[100px]">{card.title}</h3>
                {card.url.startsWith("http") ? (
                  <a
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm md:text-base font-medium underline hover:no-underline transition-all"
                  >
                    {card.link}
                  </a>
                ) : (
                  <Link
                    href={card.url}
                    className="inline-block text-sm md:text-base font-medium underline hover:no-underline transition-all"
                  >
                    {card.link}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
