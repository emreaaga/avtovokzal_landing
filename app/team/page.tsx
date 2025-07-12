'use client'

import * as React from 'react'
import { useTranslation } from "@/lib/useTranslation"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/molecules/shadcn/carousel"
import { Card, CardContent } from "@/components/molecules/shadcn/card"
import Image from "next/image"


const teamPicture = [
  "https://pechater.ru/wp-content/uploads/2019/08/foto-ot-pechaterfoto-красиво.jpg",
  "https://pechater.ru/wp-content/uploads/2019/08/Kрасивые-фото-на-документы-1.jpg",
  "https://pechater.ru/wp-content/uploads/2019/04/Foto-на-документы-от-печaterfoto-3.jpg"
]

export default function TeamPage() {
  const t = useTranslation()

  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {t.about.team.map((member, index) => (
              <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3">
                <div className="p-4">
                  <Card className="h-full">
                    <CardContent className="p-4 flex flex-col items-center text-center gap-4">
                      <Image
                        src={teamPicture[index]}
                        alt={member.name}
                        width={120}
                        height={120}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <h4 className="text-lg font-semibold">{member.name}</h4>
                        <p className="text-sm text-gray-500">{member.title}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}