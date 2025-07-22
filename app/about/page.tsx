'use client'

import * as React from 'react'
import { useState } from 'react'
import { useTranslation } from "@/lib/useTranslation"
import Image from "next/image"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import UzbekistanMap from '@/components/icons/interactive-map'

import { Card, CardContent } from "@/components/molecules/shadcn/card"
import { AspectRatio } from "@/components/molecules/shadcn/aspect-ratio"
import { CheckCircle } from 'lucide-react'
import {
  Building,
  Wifi,
  Lock,
  Baby,
  Coffee,
  Train,
  MoveVertical,
  Ticket,
  Info,
  Users,
  Bed
} from 'lucide-react'

const facilitiesIcons = [
  Building,     
  Wifi,         
  Lock,         
  Baby,         
  Coffee,       
  Train,        
  MoveVertical, 
  Ticket,       
  Info,         
  Users,        
  Bed           
]


const galleryPictures = [
  { src: "/images/outside.jpg" },
  { src: "/images/inside.jpg" },
  { src: "/images/perons.jpg" },
]

export default function AboutPage() {
  const t = useTranslation()

  const [index, setIndex] = useState(-1)

  return (
    <section className="py-20 px-6 md:px-12 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:space-x-12 md:items-center">
          <div className="flex-1 md:basis-[30%] md:max-w-[30%] mb-8 md:mb-0">
            <div className="max-w-sm">
              <h1 className="text-xl md:text-2xl font-bold mb-6 text-center md:text-left">
                {t.about.title}
              </h1>
              <p className="text-gray-700 leading-relaxed text-center md:text-left">
                {t.about.content}
              </p>
            </div>
          </div>

          <div className="flex-1 md:basis-[70%] md:max-w-[70%] flex justify-center">
            <div className="w-full translate-y-4">
              <UzbekistanMap />
            </div>
          </div>
        </div>

        <div className="mt-20 bg-gray-50 py-12 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            {t.about.facilitiesTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {t.about.facilitiesList.map((item, idx) => {
              const Icon = facilitiesIcons[idx] || CheckCircle
              return (
                <Card key={idx} className="p-4 flex items-start gap-4 rounded-xl border border-gray-200 hover:shadow-md hover:scale-[1.02] transition-transform duration-300">
                  <Icon className="w-5 h-5 text-primary mt-1" />
                  <CardContent className="p-0 text-gray-700 text-sm">{item}</CardContent>
                </Card>
              )
            })}

          </div>
        </div>


        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-2 text-center">
            {t.gallery.title}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryPictures.map((image, idx) => (
              <div
                key={idx}
                className="cursor-pointer group"
                onClick={() => setIndex(idx)}
              >
                <Card className="overflow-hidden rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">
                  <CardContent className="p-0">
                    <AspectRatio ratio={16 / 9} className="overflow-hidden">
                      <Image
                        src={image.src}
                        alt={t.gallery.images[idx].alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 
                            (max-width: 1024px) 50vw, 
                            33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                    </AspectRatio>
                    <div className="px-4 py-3 text-center text-sm text-muted-foreground font-medium">
                      {t.gallery.images[idx].alt}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <Lightbox
            open={index >= 0}
            close={() => setIndex(-1)}
            index={index}
            slides={galleryPictures.map((img) => ({ src: img.src }))}
          />
        </div>
      </div>
    </section>
  )
}
