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
      <nav className="md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Menu Button - Left side */}
          <button
            onClick={toggleMenu}
            className="text-[#FFFFFF] p-2 hover:opacity-80 transition-opacity"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo - Right side */}
          <Link href="/" className="flex items-center">
            <div className="relative w-12 h-12">
              <Image
                src="/manu-logo-copy.png"
                alt="MANU Logo"
                width={48}
                height={48}
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="bg-[#680000] border-t border-[#FFFFFF]/20 px-4 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-[#FFFFFF] text-base font-medium py-3 hover:opacity-80 transition-opacity border-b border-[#FFFFFF]/10 last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
