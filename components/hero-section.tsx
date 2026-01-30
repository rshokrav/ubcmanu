import Image from "next/image"

export function HeroSection() {
  return (
    <section className="w-full">
      {/* Title Section with off-white background */}
      <div className="bg-[#F6F0E4] px-4 md:px-6 text-center bg-card py-8 md:py-16 my-3">
        <h1 className="text-2xl md:text-5xl lg:text-7xl text-black leading-tight mb-2 md:mb-4 font-extrabold">
          Manufacturing Engineering
          <br />
          Undergrad Student Society
        </h1>
        <p className="text-xs md:text-base lg:text-lg text-black/80 mt-3 md:mt-6">At the University of British Columbia — Vancouver</p>
      </div>

      {/* Hero Image with Quote Overlay */}
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
        {/* 
          HOW TO ADD IMAGES FROM PUBLIC FOLDER:
          1. Place your image file in the /public folder (e.g., /public/my-image.jpg)
          2. Reference it in src with a leading slash: src="/my-image.jpg" (NOT /public/my-image.jpg)
          3. For Next.js Image component, always use:
             - fill: for responsive images that fill their container
             - width & height: for fixed-size images (e.g., width={1920} height={700})
          4. Add alt text for accessibility
          5. Use priority for above-the-fold images to improve loading
          6. Choose the right format: .jpeg for photos, .svg for logos/icons, .png for transparency
        */}
        <Image src="/UBC-Aerial.jpeg" alt="Vancouver cityscape" fill className="object-cover" priority />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Quote Text */}
        <div className="absolute inset-0 flex items-center justify-center px-4 md:px-6">
          <h2 className="font-serif text-xl md:text-4xl lg:text-5xl xl:text-6xl text-[#FFFFFF] text-center leading-tight text-balance">
            "Manufacturing a better tomorrow"
          </h2>
        </div>
      </div>
    </section>
  )
}
