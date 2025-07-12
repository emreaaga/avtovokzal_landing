'use client'

import * as React from 'react'
import { useTranslation } from "@/lib/useTranslation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/molecules/shadcn/tabs'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/molecules/shadcn/carousel"
import { Card, CardContent } from "@/components/molecules/shadcn/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/molecules/shadcn/tooltip"
import Image from "next/image"

const teamPicture = [
  "https://pechater.ru/wp-content/uploads/2019/08/foto-ot-pechaterfoto-красиво.jpg",
  "https://pechater.ru/wp-content/uploads/2019/08/Kрасивые-фото-на-документы-1.jpg",
  "https://pechater.ru/wp-content/uploads/2019/04/Foto-на-документы-от-печaterfoto-3.jpg"
]

// Примерная SVG-карта Узбекистана с областями
function UzbekistanMap() {
  return (
    <TooltipProvider>
      <div className="map-wrapper mx-auto">
        <svg viewBox="0 0 200 150" className="w-full max-w-md">
          {/* Ташкентская область */}
          <Tooltip>
            <TooltipTrigger asChild>
              <path
                d="M100,10 L180,10 L180,60 L100,60 Z"
                className="region"
              />
            </TooltipTrigger>
            <TooltipContent>Ташкентская область</TooltipContent>
          </Tooltip>

          {/* Самаркандская область */}
          <Tooltip>
            <TooltipTrigger asChild>
              <path
                d="M60,70 L140,70 L140,120 L60,120 Z"
                className="region"
              />
            </TooltipTrigger>
            <TooltipContent>Самаркандская область</TooltipContent>
          </Tooltip>

          {/* Бухарская область */}
          <Tooltip>
            <TooltipTrigger asChild>
              <path
                d="M10,80 L70,80 L70,140 L10,140 Z"
                className="region"
              />
            </TooltipTrigger>
            <TooltipContent>Бухарская область</TooltipContent>
          </Tooltip>

          {/* Ферганская область */}
          <Tooltip>
            <TooltipTrigger asChild>
              <path
                d="M150,80 L190,80 L190,130 L150,130 Z"
                className="region"
              />
            </TooltipTrigger>
            <TooltipContent>Ферганская область</TooltipContent>
          </Tooltip>

          {/* Хорезмская область */}
          <Tooltip>
            <TooltipTrigger asChild>
              <path
                d="M10,10 L60,10 L60,50 L10,50 Z"
                className="region"
              />
            </TooltipTrigger>
            <TooltipContent>Хорезмская область</TooltipContent>
          </Tooltip>
        </svg>
      </div>
      <style jsx>{`
        .region {
          fill: #e5e7eb;
          stroke: #374151;
          stroke-width: 1;
          cursor: pointer;
          transition: fill 0.2s;
        }
        .region:hover {
          fill: #2563EB;
        }
      `}</style>
    </TooltipProvider>
  )
}

export default function AboutPage() {
  const t = useTranslation()

  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">{t.about.title}</h1>

        <Tabs defaultValue="about" className="w-full">
          <TabsList className="mb-6 flex justify-center gap-4">
            <TabsTrigger value="about">{t.about.tabs.about}</TabsTrigger>
            <TabsTrigger value="team">{t.about.tabs.team}</TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
              {t.about.content}
            </p>
          </TabsContent>

          <TabsContent value="team">
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
          </TabsContent>
        </Tabs>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">Карта Узбекистана</h2>
          <UzbekistanMap />
        </div>
      </div>
    </section>
  )
}