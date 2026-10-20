import { useIntersectionReveal } from './hooks/useIntersectionReveal.js'
import ScrollProgress from './components/layout/ScrollProgress.jsx'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import HeroSection from './components/hero/HeroSection.jsx'
import AboutSection from './components/about/AboutSection.jsx'
import ResumeSection from './components/resume/ResumeSection.jsx'
import ExperienceSection from './components/experience/ExperienceSection.jsx'
import ProjectsSection from './components/projects/ProjectsSection.jsx'
import SkillsSection from './components/skills/SkillsSection.jsx'
import EducationSection from './components/education/EducationSection.jsx'
import CertificationsSection from './components/certifications/CertificationsSection.jsx'
import MilestonesSection from './components/milestones/MilestonesSection.jsx'
import WritingSection from './components/writing/WritingSection.jsx'
import TestimonialsSection from './components/testimonials/TestimonialsSection.jsx'
import ContactSection from './components/contact/ContactSection.jsx'

function App() {
  useIntersectionReveal()

  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <HeroSection />
        <div data-reveal>
          <AboutSection />
        </div>
        <div data-reveal>
          <ResumeSection />
        </div>
        <div data-reveal>
          <ExperienceSection />
        </div>
        <div data-reveal>
          <ProjectsSection />
        </div>
        <div data-reveal>
          <SkillsSection />
        </div>
        <div data-reveal>
          <EducationSection />
        </div>
        <div data-reveal>
          <CertificationsSection />
        </div>
        <div data-reveal>
          <MilestonesSection />
        </div>
        <div data-reveal>
          <WritingSection />
        </div>
        <div data-reveal>
          <TestimonialsSection />
        </div>
        <div data-reveal>
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App