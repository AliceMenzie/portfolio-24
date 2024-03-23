import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
// import { Row } from '@tanstack/react-table'
// import { Project } from '@/types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const scrollIntoViewWithOffset = (selector: string, offset: number) => {
  const selectedDiv = document.querySelector(selector)
  if (selectedDiv) {
    window.scrollTo({
      behavior: 'smooth',
      top:
        selectedDiv.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        offset,
    })
  }
}

export const CustomFilterFn = (
  // row: Row<Project>,
  row: any,
  key: string,
  searchValue: string
) => {
  return !!row?.original[key].find((item: string) => item.includes(searchValue))
}
