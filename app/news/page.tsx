import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-[#F6F0E4] flex items-center justify-center px-6 py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black">Coming Soon!</h1>
        </div>
      </main>
      <Footer />
    </div>
  )
}
