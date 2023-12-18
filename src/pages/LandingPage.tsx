import Contact from "../components/contact/Contact"
import Footer from "../components/footer/Footer"
import Home from "../components/home/Home"
import Navbar from "../components/navbar/Navbar"
import NewsLetter from "../components/newsletter/NewsLetter"
import Projects from "../components/projects/Projects"
import Skills from '../components/skills/Skills'

export default function LandingPage() {
    
    return (
        <>
          <Navbar />
      <Home />
      <Skills />
            <Projects />
            <Contact />
            <NewsLetter />
            <Footer/>
        </>
    )
}