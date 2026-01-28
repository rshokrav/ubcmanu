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
          <p className="text-sm text-[#680000]">Announcement: RSVP for MANU-CHBE-BMEG Tequilab (Feb 6) (!</p>
          <div className="flex items-center gap-4">
            <Link href="https://www.bouncelife.com/events/696f0969efd1a7d2bcf50960" className="text-sm text-[#680000] underline hover:opacity-70 transition-opacity">
              Fill out form
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
