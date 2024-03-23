'use client'

import { Link, Github } from 'lucide-react'
import { Project, ProjectImage } from '@/types'
import { ColumnDef } from '@tanstack/react-table'
import { Badge } from '../badge'
import { Button } from '../button'
import { Avatar, AvatarFallback, AvatarImage } from '../avatar'
import { CustomFilterFn } from '@/lib/utils'

export const columns: ColumnDef<Project>[] = [
  {
    accessorKey: 'image',
    header: '',
    cell: ({ row }) => {
      const image: ProjectImage = row.getValue('image')
      return (
        <Avatar>
          <AvatarImage src={image?.url} />
          <AvatarFallback className="dark:bg-zinc-200 dark:text-black font-semibold">
            {image.fallback}
          </AvatarFallback>
        </Avatar>
      )
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      return row.getValue('status') === 'live' ? (
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      ) : (
        <div className="h-3 w-3 rounded-full bg-zinc-300"></div>
      )
    },
  },
  {
    accessorKey: 'name',
    header: 'Project',
  },
  {
    accessorKey: 'stack',
    header: 'Stack',
    cell: ({ row }) => {
      const items = row.original.stack
      return (
        <div className="flex gap-1 flex-wrap">
          {items.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      )
    },
    // filterFn: 'arrIncludesSome',
    filterFn: CustomFilterFn,
    enableColumnFilter: true,
  },
  {
    accessorKey: 'url',
    header: 'Links',
    cell: ({ row }) => {
      const items = row.original.url
      return (
        <div className="flex gap-1 flex-wrap">
          {items?.live && (
            <Button
              size={'icon'}
              variant={'link'}
              title={items?.live}
              className="hover:text-orange-300 dark:hover:text-orange-300"
            >
              <a href={items?.live} target="_blank" rel="noopener noreferrer">
                <Link />
              </a>
            </Button>
          )}
          {items?.github && (
            <Button
              size={'icon'}
              variant={'link'}
              title={items?.github}
              className="hover:text-orange-300 dark:hover:text-orange-300"
            >
              <a href={items?.github} target="_blank" rel="noopener noreferrer">
                <Github />
              </a>
            </Button>
          )}
        </div>
      )
    },
  },
]
