'use client'

import * as React from 'react'
import { useState } from 'react'
import { useTranslation } from "@/lib/useTranslation"
import Image from "next/image"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

import { Card, CardContent } from "@/components/molecules/shadcn/card"
import { AspectRatio } from "@/components/molecules/shadcn/aspect-ratio"

const galleryPictures = [
  {
    src: "/images/outside.jpg",
  },
  {
    src: "/images/inside.jpg",
  },
  {
    src: "/images/perons.jpg",
  },
]

export default function AboutPage() {
  const t = useTranslation()

  const [index, setIndex] = useState(-1)

  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-xl md:text-2xl font-bold mb-10 text-center">
          {t.about.title}
        </h1>
        <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          {t.about.content}
        </p>

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
