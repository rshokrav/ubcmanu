export function LatestSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">The Latest</h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Recent Event - Top Left */}
          <div className="rounded-xl overflow-hidden shadow-sm border bg-[rgba(252,251,247,1)] border-[rgba(252,251,247,1)]">
            <div className="aspect-[4/3] bg-muted relative overflow-hidden">
              <img
                src="/2025-mixer.png?height=400&width=500"
                alt="2025 Annual Welcome Mixer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 bg-[rgba(252,250,246,1)]">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Recent Events</span>
              <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-3">2025 Annual Welcome Mixer</h3>
              <p className="text-base text-muted-foreground">
                Our Welcome Mixer brought together students, faculty, and staff from across Manufacturing Engineering.
              </p>
            </div>
          </div>

          {/* Spotlight - Top Right */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-border">
            <div className="p-6 flex flex-col items-center text-center h-full justify-center py-12 bg-[rgba(252,250,246,1)] border-[rgba(252,251,247,1)]">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-6">Spotlight</span>
              <div className="w-60 h-60 rounded-full bg-[var(--burgundy)] mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src="/omar.jpg?height=160&width=160"
                  alt="Society Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Muhammed Omar Khan</h3>
              <p className="text-base text-muted-foreground">Society President for 2025-2026</p>
            </div>
          </div>

          {/* Upcoming Event - Bottom Left */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-border">
            <div className="aspect-[4/3] bg-muted relative overflow-hidden">
              <img
                src="/tequilab.jpg?height=400&width=500"
                alt="Tutoring: CPEN 223"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 bg-[rgba(252,250,246,1)] border-[rgba(252,251,247,1)]">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Upcoming event</span>
              <h3 className="text-2xl md:text-3xl font-bold mt-2">Tequilab Party by MANU-BMEG-CHBE</h3>
              <p className="text-base text-muted-foreground">
                Pronounced Teh-Key-Lab, not ticky-lab like Omar says it. Don't be like Omar. 
              </p>
            </div>
          </div>

          {/* Empty space - Bottom Right (or additional content if needed) */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-border">
            <div className="aspect-[4/3] bg-muted relative overflow-hidden">
              <img
                src="/tequilab.jpg?height=400&width=500"
                alt="Tutoring: CPEN 223"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 bg-[rgba(252,250,246,1)] border-[rgba(252,251,247,1)]">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Upcoming event</span>
              <h3 className="text-2xl md:text-3xl font-bold mt-2">MANU Ski Trip!!!</h3>
              <p className="text-base text-muted-foreground">
                Nightskiing at Cypress and you choose the date and time; see Events for more info! 
              </p>
            </div>
          </div>
          {/* <div className="hidden md:block"></div> */}
        </div>
      </div>
    </section>
  )
}
