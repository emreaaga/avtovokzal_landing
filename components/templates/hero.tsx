'use client'

import { Button } from '@/components/molecules/shadcn/button'
import { useTranslation } from '@/lib/useTranslation'
import Link from 'next/link'
import Image from 'next/image'
import { AspectRatio } from '../molecules/shadcn/aspect-ratio'
import { Input } from '../molecules/shadcn/input'

export default function Hero() {
  const t = useTranslation()

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-28"
      style={{
        backgroundImage:
          "url('https://avatars.mds.yandex.net/get-altay/9709783/2a00000189737d9e5effd61b1f2af584aaf4/orig')",
      }}
    >
      <div className="absolute inset-0 bg-black/50" /> 

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.hero.title}</h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">{t.hero.description}</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="https://avtoticket.uz/" target="_blank" rel="noopener noreferrer">
            <Button>{t.hero.button_buy}</Button>
          </a>
          <Link href="/about">
            <Button variant="secondary">{t.hero.button_more}</Button>
          </Link>
          
        </div>
      </div>
    </section>


  )
}
