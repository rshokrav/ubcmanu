"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function ContactsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const contacts = [
    { title: "President", name: "Muhammed Omar Khan", email: "ubcmanu.president@gmail.com" }, // REPLACE with actual email
    { title: "Vice President - Finance", name: "Juan Velasquez", email: "ubcmanu.treasurer@gmail.com" }, // REPLACE with actual email
    { title: "Vice President - Student Life", name: "Owen Dustin", email: "NA" }, // REPLACE with actual email
    { title: "Vice President - Student Life", name: "Katrina Warren", email: "ubcmanu.social@gmail.com" }, // REPLACE with actual email
    { title: "Vice President - Academic", name: "Nicholas Ressl", email: "ubcmanu.academic@gmail.com" }, // REPLACE with actual email
    { title: "Vice President - Academic", name: "Sam Zhang", email: "ubcmanu.academic@gmail.com" }, // REPLACE with actual email
    { title: "Clubroom Manager", name: "Iris Wong", email: "NA" }, // REPLACE with actual email
    { title: "E-Week Representative", name: "Owen Dustin", email: "NA" }, // REPLACE with actual email
    { title: "Communications Representative", name: "Richie Kong", email: "ubcmanu.social@gmail.com" }, // REPLACE with actual email

  ]

  const socials = [
    { name: "Discord", icon: "/discord-icon.png?height=200&width=200", url: "https://discord.com/invite/fXmMyszBYe" },
    { name: "IG", icon: "/ig-icon.png?height=200&width=200", url: "https://www.instagram.com/ubcmanu" },
    { name: "Linkedin", icon: "/linkedin-icon.png?height=200&width=200", url: "/news" },
    { name: "YouTube", icon: "/yt-icon2.png?height=200&width=200", url: "https://www.youtube.com/@ubcmanu-tube3689" },
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F0E4]">
      <Header />

      <main className="flex-1">
        {/* Title Section */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 py-8 md:py-16 bg-card">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 md:mb-16 text-left">Contacts and Directory</h1>

          {/* Desktop Contacts Table - Hidden on mobile */}
          <div className="hidden md:block bg-white rounded-2xl shadow-lg overflow-hidden mb-24 transition-shadow duration-300 hover:shadow-xl">
            <table className="w-full">
              <thead>
                <tr className="bg-[#E57373]">
                  <th className="text-left px-8 py-5 text-xl font-bold bg-blue-200">Title</th>
                  <th className="text-left px-8 py-5 text-xl font-bold bg-blue-200">Name</th>
                  <th className="text-left px-8 py-5 text-xl font-bold bg-blue-200">Contact</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-8 py-6 text-lg font-medium">{contact.title}</td>
                    <td className="px-8 py-6 text-lg">{contact.name}</td>
                    <td className="px-8 py-6 text-lg">
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-[#680000] hover:opacity-70 transition-opacity underline"
                      >
                        {contact.email}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Accordion - Visible only on mobile */}
          <div className="md:hidden bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            {/* Header */}
            <div className="bg-blue-200 px-4 py-4">
              <span className="text-base font-bold">Title</span>
            </div>
            
            {/* Accordion Items */}
            {contacts.map((contact, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                {/* Accordion Header - Title only */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-4 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm font-medium">{contact.title}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                {/* Accordion Content - Name and Contact */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 pb-4 pt-2 bg-gray-50 border-t border-gray-100">
                    <div className="mb-2">
                      <span className="text-xs text-gray-500 uppercase tracking-wide">Name</span>
                      <p className="text-sm font-medium">{contact.name}</p>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 uppercase tracking-wide">Contact</span>
                      <p className="text-sm">
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-[#680000] hover:opacity-70 transition-opacity underline"
                        >
                          {contact.email}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Media Section -- same for web and mobile */}
          <div className="mb-16">
            <h2 className="text-5xl font-bold text-[#680000] mb-12 text-foreground md:text-5xl">Find Us on Socials</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  className="flex items-center justify-center transition-transform hover:scale-110 duration-300"
                >
                  <Image
                    src={social.icon || "/placeholder.svg"}
                    alt={social.name}
                    width={200}
                    height={200}
                    className="w-full h-auto max-w-[200px] rounded-3xl"
                  />
                </Link>
              ))}
            </div>

            <p className="text-base text-gray-700">
              For inquiries about the website please send an email to ubcmanu.social@gmail.com
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
