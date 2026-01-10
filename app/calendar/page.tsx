import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CalendarPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F0E4]">
      <Header />

      <main className="flex-1 py-12 px-6 lg:px-12 bg-card">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">MANU Calendar</h1>

          {/* Google Calendar Embed Container */}
          <div className="w-full rounded-lg shadow-md p-4 md:p-6 bg-[rgba(241,244,249,1)]">
            {/* ========================================== */}
            {/* START: INSERT YOUR GOOGLE CALENDAR IFRAME HERE */}

            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FVancouver&showPrint=0&src=ZWJmZDJhMmFjMTZmYzNhODViMDdlODExYjk5ZmFmYjBlYzlmOTkzY2FhMzRiZDA2MTRlYjFhMTAzOTAyYWM2NUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23680000"
              style={{ border: 0 }}
              width="100%"
              height="600"
              frameBorder={0}
              scrolling="no"
            ></iframe>
           

            {/* END OF GOOGLE CALENDAR IFRAME SECTION     */}
            {/* ========================================== */}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
