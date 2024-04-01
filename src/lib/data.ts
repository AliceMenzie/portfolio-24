import { Project } from './types'

export const projects: Project[] = [
  {
    id: '1',
    name: 'Hangman',
    status: 'live',
    url: {
      live: 'https://think-space-ivory.vercel.app/',
      github: 'https://github.com/AliceMenzie/think-space',
    },
    stack: ['typescript', 'nx', 'shadcn', 'nextjs', 'tailwind', 'vercel'],
    image: {
      url: './hangman.png',
      fallback: 'HM',
    },
  },
  {
    id: '2',
    name: 'Multistep Form',
    status: 'live',
    url: {
      live: 'https://forms-beige-nu.vercel.app/multi',
      github: 'https://github.com/AliceMenzie/Forms',
    },
    stack: [
      'typescript',
      'nextjs',
      'tailwind',
      'zod',
      'react-hook-form',
      'vercel',
    ],
    image: {
      url: './fm-multi-form.png',
      fallback: 'HM',
    },
  },
  {
    id: '3',
    name: 'We Have Coffee',
    status: 'github',
    url: {
      live: null,
      github: 'https://github.com/AliceMenzie/coffee-e-comm',
    },
    stack: [
      'typescript',
      'nextjs',
      'prisma',
      'server-components',
      'shadcn',
      'zod',
      'tailwind',
      'react-hook-form',
    ],
    image: {
      url: '',
      fallback: 'WHC',
    },
  },
  {
    id: '4',
    name: 'Shopping Tracker',
    status: 'live',
    url: {
      live: 'https://shopping-tracker-swart.vercel.app/',
      github: 'https://github.com/AliceMenzie/shopping-tracker',
    },
    stack: ['typescript', 'tailwind', 'vercel'],
    image: {
      url: './shopping-tracker.png',
      fallback: 'ST',
    },
  },
  {
    id: '5',
    name: 'Marketplace',
    status: 'archived',
    url: {
      live: null,
      github: 'https://github.com/AliceMenzie/A2T2_marketplace',
    },
    stack: ['ruby', 'rails', 'css', 'heroku'],
    image: {
      url: '//todo',
      fallback: 'MP',
    },
  },
  {
    id: '6',
    name: 'Libro',
    status: 'archived',
    url: { live: null, github: 'https://github.com/AliceMenzie/T3A2_client' },
    stack: ['ruby', 'rails', 'react', 'css', 'heroku'],
    image: {
      url: '//todo',
      fallback: 'L',
    },
  },
  {
    id: '7',
    name: 'Archived Portfolio',
    status: 'archived',
    url: {
      live: null,
      github: 'https://github.com/AliceMenzie/gatsby-portfolio',
    },
    stack: ['gatsby', 'netlify'],
    image: {
      url: './old-portfolio.png',
      fallback: 'P',
    },
  },
  {
    id: '8',
    name: 'Frontend Mentor Profile',
    status: 'live',
    url: {
      live: 'https://www.frontendmentor.io/profile/AliceMenzie',
      github: null,
    },
    stack: [
      'typescript',
      'javascript',
      'tailwind',
      'styled-components',
      'storybook',
      'gh-pages',
      'stenciljs',
      'react query',
    ],
    image: {
      url: './fm-profile.png',
      fallback: 'FM',
    },
  },
]
