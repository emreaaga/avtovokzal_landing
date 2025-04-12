'use client'
import { useTranslation } from '@/lib/useTranslation'
import Link from 'next/link'

export default function Footer() {
  const t = useTranslation()

  return (
    <footer className='bg-primary py-10 text-secondary'>
      <div className='container mx-auto px-4 md:px-6 lg:px-8'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>

          <div>
            <h3 className='text-lg font-semibold text-gray-200'>{t.footer.navigation}</h3>
            <ul className='mt-4 space-y-2'>
              <li><Link className='hover:text-gray-300' href='/'>{t.footer.links.home}</Link></li>
              <li><Link className='hover:text-gray-300' href='/about'>{t.footer.links.about}</Link></li>
              <li><Link className='hover:text-gray-300' href='/news'>{t.footer.links.news}</Link></li>
              <li><Link className='hover:text-gray-300' href='/schedule'>{t.footer.links.schedule}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-gray-200'>{t.footer.documents}</h3>
            <ul className='mt-4 space-y-2'>
              <li><Link className='hover:text-gray-300' href='/terms'>{t.footer.links.terms}</Link></li>
              <li><Link className='hover:text-gray-300' href='/privacy'>{t.footer.links.privacy}</Link></li>
              <li><Link className='hover:text-gray-300' href='/offer'>{t.footer.links.offer}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-gray-200'>{t.footer.contacts}</h3>
            <ul className='mt-4 space-y-2 text-sm'>
              <li>{t.footer.contact_info.address}</li>
              <li>{t.footer.contact_info.phone}</li>
              <li><a className='hover:text-gray-300 underline' href='https://t.me/AvtovokzalBot' target='_blank'>{t.footer.contact_info.telegram}</a></li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-gray-200'>{t.footer.social}</h3>
            <ul className='mt-4 space-y-2'>
              <li><a href='https://t.me/AvtovokzalBot' className='hover:text-gray-300'>{t.footer.social_links.telegram}</a></li>
              <li><a href='#' className='hover:text-gray-300'>{t.footer.social_links.instagram}</a></li>
              <li><a href='#' className='hover:text-gray-300'>{t.footer.social_links.youtube}</a></li>
            </ul>
          </div>
        </div>

        <div className='mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-400'>
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  )
}
