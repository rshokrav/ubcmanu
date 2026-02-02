import Link from "next/link"
import { Instagram, Linkedin, Youtube } from "lucide-react"
import DiscordIcon from "@/components/DiscordIcon" // Assuming DiscordIcon is a custom SVG component

export function Footer() {
  return (
    <footer className="bg-[#680000] text-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Social Icons */}
        <div className="flex gap-4 mb-12">
          <Link href="https://discord.com/invite/fXmMyszBYe" className="hover:opacity-80 transition-opacity" aria-label="Discord">
            <DiscordIcon className="w-8 h-6" />
          </Link>
          <Link href="https://www.instagram.com/ubcmanu" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
            <Instagram className="w-6 h-6" />
          </Link>
          <Link href="/news" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link href="https://www.youtube.com/@ubcmanu-tube3689" className="hover:opacity-80 transition-opacity" aria-label="YouTube">
            <Youtube className="w-6 h-6" />
          </Link>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Side - Tagline */}
          <div>
            <p className="text-xs leading-relaxed md:text-sm">
              Precision in every step,
              <br />
              Manufacturing a better tomorrow.
            </p>
          </div>

          {/* Right Side - Contact Info */}
          <div className="text-xs space-y-2 md:text-sm">
            <p>ubcmanu.social@gmail.com</p>
            <p>101-2275 East Mall, Vancouver, BC V6T 1Z4</p>
            <p>(___) ___-____</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-xs opacity-90 md:text-sm">
            Manufacturing Engineering Undergraduate Student Society at the University of British Columbia © 2025 All
            Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
