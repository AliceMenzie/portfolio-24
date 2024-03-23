import Header from './components/header/header'
import AboutMe from './components/about-me'
import Projects from './components/projects'
import Footer from './components/footer'
import { useRef } from 'react'

// TODO
// logo
// clean up animation + folder struct + table files
// animation - check for those who want disabled
// ui - color scheme + typography
// #ffe9de #fae8de #fcf1db
// review + asChild
// finalise projects + add apis + tags for FE BE Full etc

function App() {
  const projectsRef = useRef<HTMLDivElement | null>(null)

  return (
    <div className="dark:bg-zinc-800 dark:text-white">
      <Header projectsRef={projectsRef} />
      <main className="container flex flex-col">
        <AboutMe />
        <Projects projectsRef={projectsRef} />
      </main>
      <Footer />
    </div>
  )
}

export default App
