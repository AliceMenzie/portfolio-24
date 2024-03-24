import { ForwardedRef } from 'react'
import { Folder } from 'lucide-react'
import { DataTable } from './ui/table/data-table'
import { columns } from '../components/ui/table/columns'
import { projects } from '@/lib/data'

interface ProjectsProps {
  projectsRef: ForwardedRef<HTMLDivElement | null>
}

const Projects = ({ projectsRef }: ProjectsProps) => {
  return (
    <div
      ref={projectsRef}
      id="projects"
      className="min-h-[calc(100vh-10rem)] pt-[80px]"
    >
      <h2 className="text-4xl font-semibold flex items-center gap-3">
        <Folder />
        <span>Projects</span>
      </h2>
      <DataTable columns={columns} data={projects} />
    </div>
  )
}

export default Projects
