import { ThemeProvider } from "@/components/theme-provider"
import Hero from "@/components/Hero"
import About from "@/components/About"
import { EducationTimeline } from "./components/Eduction"
import { ExperienceTimeline } from "./components/Internships"
import ProjectsSection from "./components/Projects"
import SkillsSection from "./components/Skills"
import CertificatesSection from "./components/Certificates"
import Footer from "./components/Footer"
import { FloatingNavDemo } from './components/Navbar';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <>
      <FloatingNavDemo/>
      <Hero/>
      <About/>
      <EducationTimeline/>
      <ExperienceTimeline/>
      <ProjectsSection/>
      <SkillsSection/>
      <CertificatesSection/>
      <Footer/>
      </>
    </ThemeProvider>
  )
}

export default App