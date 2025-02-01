import Header from "../components/Header"
import Intro from "../components/Intro"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <Header />
      <Intro />
      <div className="container mx-auto px-4">
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  )
}

