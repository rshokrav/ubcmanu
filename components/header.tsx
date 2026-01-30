"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/calendar", label: "Calendar" },
    { href: "/news", label: "Resources" },
    { href: "/events", label: "Events" },
    { href: "/council", label: "Council" },
    { href: "/contacts", label: "Contacts" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-[#680000]">
      {/* Desktop Navigation - Hidden on mobile */}
      <nav className="hidden md:flex mx-auto items-center justify-between px-6 py-4 lg:px-12">
        {/* Left Navigation */}
        <div className="flex items-center gap-8">
          <Link href="/" className="text-[#FFFFFF] text-base font-medium hover:opacity-80 transition-opacity">
            Home
          </Link>
          <Link href="/calendar" className="text-[#FFFFFF] text-base font-medium hover:opacity-80 transition-opacity">
            Calendar
          </Link>
          <Link href="/news" className="text-[#FFFFFF] text-base font-medium hover:opacity-80 transition-opacity">
            Resources
          </Link>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/" className="flex items-center">
            <div className="relative w-16 h-16">
              <Image
                src="/manu-logo-copy.png"
                alt="MANU Logo"
                width={64}
                height={64}
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Right Navigation */}
        <div className="flex items-center gap-8">
          <Link href="/events" className="text-[#FFFFFF] text-base font-medium hover:opacity-80 transition-opacity">
            Events
          </Link>
          <Link href="/council" className="text-[#FFFFFF] text-base font-medium hover:opacity-80 transition-opacity">
            Council
          </Link>
          <Link href="/contacts" className="text-[#FFFFFF] text-base font-medium hover:opacity-80 transition-opacity">
            Contacts
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation - Visible only on mobile */}
      <nav className="md:hidden relative">
        {/* Thin header bar with logo sticking out */}
        <div className="flex items-center justify-between px-4 py-1 h-14">
          {/* Menu Button - Left side */}
          <button
            onClick={toggleMenu}
            className="text-[#FFFFFF] p-1 hover:opacity-80 transition-opacity"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo - Far right, sticking out below header */}
          <Link href="/" className="absolute right-4 top-1/2 -translate-y-1/3">
            <div className="relative w-14 h-14">
              <Image
                src="/manu-logo-copy.png"
                alt="MANU Logo"
                width={56}
                height={56}
                className="object-contain drop-shadow-lg"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Mobile Dropdown Menu with animation */}
        <div 
          className={`
            overflow-hidden transition-all duration-300 ease-in-out
            ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="bg-[#680000] border-t border-[#FFFFFF]/20 px-4 py-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-[#FFFFFF] text-sm font-medium py-2.5 hover:opacity-80 transition-opacity border-b border-[#FFFFFF]/10 last:border-b-0"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
