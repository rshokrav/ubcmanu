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
          <p className="text-0.5xl md:text-sm text-[#680000]">Announcement: Fill out E-Week Interest Form to particpate in events!</p>
          <div className="flex items-center gap-4">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeDwuJdEryVU-z2UffyDLqPrmTHXMT08cHh_4Z6s9_5pq29xw/viewform?usp=dialog" className="text-0.5xl text-[#680000] underline hover:opacity-70 transition-opacity">
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
