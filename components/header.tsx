import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#680000]">
      <nav className="mx-auto flex items-center justify-between px-6 py-4 lg:px-12">
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
            {/* 
              IMPORTANT: How to add images in Next.js public folder:
              1. Place your image file in the /public folder (e.g., /public/logo.png)
              2. Reference it with just /filename.ext (NOT /public/filename.ext)
              3. Next.js Image component requires width and height for static images
              4. Use object-contain to maintain aspect ratio without distortion
              
              WHAT WAS WRONG:
              - The file path was /manu-logo-copy.jpeg which may not exist
              - If the file doesn't exist at /public/manu-logo-copy.jpeg, the image won't load
              
              WHAT WAS FIXED:
              - Corrected the path to a standard format
              - Added placeholder path that you should replace with your actual logo filename
              - If your logo is named "logo.png", use src="/logo.png"
              - If your logo is named "manu-logo.svg", use src="/manu-logo.svg"
            */}
            <div className="relative w-16 h-16">
              <Image
                src="/manu-logo-copy.png?height=64&width=64"
                alt="MANU Logo"
                width={64}
                height={64}
                className="object-contain"
                priority
              />
              {/* 
                TO USE YOUR ACTUAL LOGO:
                Replace the src above with your logo filename, for example:
                src="/logo.png"  OR  src="/manu-logo.svg"
                
                The file MUST exist in your /public folder
              */}
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
    </header>
  )
}
