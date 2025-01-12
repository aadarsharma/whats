import Link from 'next/link'
import { BarChart2, FileText, LayoutDashboard, X } from 'lucide-react'

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <aside className={`
      fixed inset-y-0 left-0 z-50 w-64 bg-white border-r transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      md:relative md:translate-x-0
    `}>
      <div className="flex justify-between items-center p-4 md:p-6">
        <h2 className="text-xl font-bold">Menu</h2>
        <button onClick={onClose} className="md:hidden">
          <X className="w-6 h-6" />
        </button>
      </div>
      <nav className="space-y-6 p-4 md:p-6">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900"
        >
          <LayoutDashboard className="w-5 h-5" />
          <span>Dashboard</span>
        </Link>
        <Link
          href="/skill-test"
          className="flex items-center gap-2 text-blue-600"
        >
          <FileText className="w-5 h-5" />
          <span>Skill Test</span>
        </Link>
        <Link
          href="/internship"
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900"
        >
          <BarChart2 className="w-5 h-5" />
          <span>Internship</span>
        </Link>
      </nav>
    </aside>
  )
}

