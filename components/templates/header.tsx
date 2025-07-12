import MountainIcon from '@/components/icons/mountain-icon'
import { NavigationMenuHeader } from '@/components/organisms/shadcn/navigation-menu'
import Link from 'next/link'
import { LanguageSwitcher } from '@/components/organisms/shadcn/LanguageSwitcher'

export default function Header() {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white shadow-md flex items-center justify-between px-4 py-3 md:px-6 lg:px-8 '>
      <Link className='flex items-center' href='#'>
        <MountainIcon className='h-6 w-6' />
        <span className='ml-2 text-lg font-semibold'>Avtovokzal</span>
      </Link>
      <nav className='hidden space-x-4 md:flex'>
        <NavigationMenuHeader/>
      </nav>
      <LanguageSwitcher/>
    </header>
  )
}
