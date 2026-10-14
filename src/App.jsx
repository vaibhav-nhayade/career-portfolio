import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import HeroSection from './components/hero/HeroSection.jsx'
import AboutSection from './components/about/AboutSection.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        {/* Next sections (Experience, Projects, ...) mount here as they're built */}
      </main>
      <Footer />
    </>
  )
}

export default App