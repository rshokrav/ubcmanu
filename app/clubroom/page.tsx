import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function ClubroomPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Full-Width Image Section - starts right after header */}
      <div className="w-full h-64 md:h-80 lg:h-96 relative">
        {/* ========================================== */}
        {/* START: INSERT YOUR CLUBROOM IMAGE HERE */}
        {/* Replace the src with your actual image path */}
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="MANU Clubroom"
          fill
          className="object-cover"
          priority
        />
        {/* END OF CLUBROOM IMAGE SECTION */}
        {/* ========================================== */}
      </div>

      <main className="flex-1 py-12 px-6 lg:px-12 bg-[#F6F0E4] bg-card">
        <div className="max-w-7xl mx-auto">
          {/* Google Maps Embed Container */}
          <div className="w-full rounded-lg shadow-md overflow-hidden bg-white">
            {/* ========================================== */}
            {/* START: INSERT YOUR GOOGLE MAPS IFRAME HERE */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d265.2112126656288!2d-123 2504043476676!3d49.262916354362915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548672c9f3407bb9%3A0x2045dc3a458b2310!2sCivil%20and%20Mechanical%20Engineering%20Structures%20Lab%20(Rusty%20Hut)!5e1!3m2!1sen!2sca!4v1767497323973!5m2!1sen!2sca" width="600"
              height="450"
              allowFullScreen=""
              loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* END OF GOOGLE MAPS IFRAME SECTION */}
            {/* ========================================== */}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
