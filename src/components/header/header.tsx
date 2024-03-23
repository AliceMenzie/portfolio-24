import { Folder } from 'lucide-react'
import { Dropdown } from './dropdown'
import HeaderSection from './header-section'
import { Button } from '../ui/button'
import { RefObject } from 'react'
import { scrollIntoViewWithOffset } from '@/lib/utils'

interface HeaderProps {
  projectsRef: RefObject<HTMLDivElement>
}

const Header = ({ projectsRef }: HeaderProps) => {
  return (
    <header className="backdrop-blur-lg lg:backdrop-blur-0 sticky top-0 container z-10  py-5 flex items-center justify-between gap-5">
      <section className=" flex flex-1 justify-between">
        <div className="h-5 w-5 rounded-full bg-orange-300 flex place-content-center"></div>
        <nav>
          <Button
            variant={'link'}
            onClick={() => {
              if (projectsRef && projectsRef.current) {
                scrollIntoViewWithOffset('#projects', 30)
              }
            }}
            title="Projects"
          >
            <Folder />
            <span className="sr-only">Projects</span>
          </Button>
        </nav>
      </section>
      <section className="hidden md:flex gap-1">
        <HeaderSection />
      </section>
      <section className="md:hidden">
        <Dropdown />
      </section>
    </header>
  )
}

export default Header
