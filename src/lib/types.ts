export type ProjectImage = {
  url: string
  fallback: string
}

export type Project = {
  id: string
  name: string
  status: 'live' | 'archived' | 'github'
  url: { live: string | null; github: string | null }
  stack: string[]
  image: ProjectImage
}


