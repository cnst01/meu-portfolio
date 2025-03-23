import { HeroSection } from '../src/sections/HeroSection'
import { Header } from '../src/sections/Header'
import { AboutSection } from '@/src/sections/AboutSection'
import { Footer } from '@/src/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <Footer />
      {/* Adicione outras seções aqui */}
    </>
  )
}