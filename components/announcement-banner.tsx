"use client"

import { X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="w-full px-6 pt-4 lg:px-12">
      <div className="bg-[#F6F0E4] rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-6 gap-4 py-3 mx-0 my-0 shadow-sm">
          <p className="text-sm text-[#680000]">Announcement: Sign up for a chance to visit the Toyota Factory on a trip to Ontario!</p>
          <div className="flex items-center gap-4">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdKr-MvmueEZ2ZUuGdipJ75wDyPpwmCINr7rxGvsXD19ybaQw/viewform?usp=header" className="text-sm text-[#680000] underline hover:opacity-70 transition-opacity">
              Interest Form
            </Link>
            <button
              onClick={() => setIsVisible(false)}
              className="text-[#680000] hover:opacity-70 transition-opacity"
              aria-label="Close announcement"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
