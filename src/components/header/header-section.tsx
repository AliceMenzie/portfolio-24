import { SunMoon, Github, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/lib/hooks/use-theme'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const HeaderSection = () => {
  const { setTheme } = useTheme()
  return (
    <>
      <Button size="icon" variant={'link'} title="Linkedin">
        <a
          href="https://www.linkedin.com/in/alice-menzie/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </a>
      </Button>
      <Button size="icon" variant={'link'} title="Github">
        <a
          href="https://github.com/AliceMenzie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" title="Theme">
            <SunMoon />
          </Button>
        </DropdownMenuTrigger>
        {/* <DropdownMenuContent className="w-56"> */}
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme('light')}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('dark')}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('system')}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default HeaderSection
