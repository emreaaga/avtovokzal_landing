'use client'

import { NavigationMenuHeader } from '@/components/organisms/shadcn/navigation-menu'
import Link from 'next/link'
import { LanguageSwitcher } from '@/components/organisms/shadcn/LanguageSwitcher'
import Image from 'next/image'
import { useState } from 'react'
import { MenuIcon, XIcon } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md flex items-center justify-between px-4 py-3 md:px-6 lg:px-8">
      <Link href="/" className="flex items-center">
        <Image src="/logo.svg" alt="Avtovokzal Logo" width={32} height={32} />
        <span className="ml-2 text-lg font-semibold">Uzavtovokzal</span>
      </Link>

      <nav className="hidden space-x-4 md:flex">
        <NavigationMenuHeader />
      </nav>

      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col px-4 py-4 space-y-2 md:hidden">
          <NavigationMenuHeader />
        </div>
      )}

      <LanguageSwitcher />
    </header>
  )
}
