'use client'

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
import Image from "next/image"

const teamMembers = [
  {
    name: "Абдурашидов Шерзод",
    position: "Генеральный директор",
    image: "https://pechater.ru/wp-content/uploads/2019/08/foto-ot-pechaterfoto-krasivo.jpg",
  },
  {
    name: "Исмоилов Азизбек",
    position: "Заместитель директора",
    image: "https://pechater.ru/wp-content/uploads/2019/08/Krasivye-foto-na-dokumenty-1.jpg",
  },
  {
    name: "Собиров Элёр",
    position: "Финансовый директор",
    image: "https://pechater.ru/wp-content/uploads/2019/04/Foto-na-dokumenty-ot-pechaterfoto-3.jpg",
  }
]

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
                {teamMembers.map((member, index) => (
                  <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3">
                    <div className="p-4">
                      <Card className="h-full">
                        <CardContent className="p-4 flex flex-col items-center text-center gap-4">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={120}
                            height={120}
                            className="rounded-full object-cover"
                          />
                          <div>
                            <h4 className="text-lg font-semibold">{member.name}</h4>
                            <p className="text-sm text-gray-500">{member.position}</p>
                          </div>
                          <p className="text-sm text-muted-foreground">{member.description}</p>
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
      </div>
    </section>
  )
}
