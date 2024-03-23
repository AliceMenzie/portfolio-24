import { Button } from '@/components/ui/button'

const Footer = () => {
  return (
    <footer className="container flex h-20 items-center justify-center">
      <Button variant={'link'}>
        <a
          href="https://www.linkedin.com/in/alice-menzie/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
      </Button>
      <Button variant={'link'}>
        <a
          href="https://github.com/AliceMenzie"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
      </Button>
      <p className="text-gray-500 text-sm py-4">&copy; 2024 Alice Menzie.</p>
    </footer>
  )
}

export default Footer
