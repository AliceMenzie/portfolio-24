import { Project } from "./types";

export const projects: Project[] = [
  {
    id: '1',
    name: 'Hangman',
    status: 'live',
    url: { live: 'https://think-space-ivory.vercel.app/', github: '' },
    stack: ['nx', 'shadcn', 'typescript', 'nextjs', 'tailwind', 'vercel'],
    image: {
      url: './hangman.png',
      fallback: 'HM',
    },
  },
  {
    id: '1',
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
    id: '1',
    name: 'Landing Page',
    status: 'live',
    url: {
      live: 'https://alicemenzie.github.io/fm-suite-landing-page/',
      github: 'https://github.com/AliceMenzie/fm-suite-landing-page',
    },
    stack: ['typescript', 'storybook', 'styled-components', 'gh-pages'],
    image: {
      url: './fm-landing-page.png',
      fallback: 'HM',
    },
  },
  {
    id: '1',
    name: 'Advice Generator',
    status: 'live',
    url: {
      live: 'https://alicemenzie.github.io/advice-generator/',
      github: 'https://github.com/AliceMenzie/advice-generator',
    },
    stack: ['javascript', 'scss', 'react-query', 'gh-pages'],
    image: {
      url: './fm-advice-generator.png',
      fallback: 'HM',
    },
  },
  {
    id: '2',
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
    id: '3',
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
    id: '4',
    name: 'Archived Portfolio',
    status: 'archived',
    url: { live: null, github: 'https://github.com/AliceMenzie/gatsby-portfolio' },
    stack: ['gatsby', 'netlify'],
    image: {
      url: './old-portfolio.png',
      fallback: 'P',
    },
  },
  {
    id: '5',
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
      'gh-pages',
      'stenciljs',
    ],
    image: {
      url: './fm-profile.png',
      fallback: 'FM',
    },
  },
]
