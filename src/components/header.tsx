import { Menu } from 'lucide-react'
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image'

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-4 py-2 md:px-6 md:py-4 bg-white border-b">
      <div className="flex items-center gap-2 md:gap-4">
        <button onClick={onMenuClick} className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
        <div className="font-bold text-lg md:text-xl">WhatBytes</div>
      </div>
      <div className="border-solid border-2 rounded-lg p-1 flex items-center gap-2 md:gap-4">
        <div className="flex items-center gap-2">
          <Image src="/rahil.jpeg" alt="Notifications" width={24} height={24} style={{borderRadius: '50px 30px 40px 30px'}} />
          <span className="hidden md:inline text-sm font-medium">Rahil Siddique</span>
        </div>
      </div>
    </header>
  )
}

