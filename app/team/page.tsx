'use client'

import * as React from 'react'
import { useTranslation } from "@/lib/useTranslation"
import Image from "next/image"
import { Card } from "@/components/molecules/shadcn/card"
import { motion } from "framer-motion"

const teamPicture = [
  "/teams/test_team.png",
  "/teams/test_team.png",
  "/teams/test_team.png"
]

export default function TeamPage() {
  const t = useTranslation()

  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t.team.title}
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          {t.team.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {t.about.team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="flex flex-col items-center text-center p-6 shadow-sm hover:shadow-md transition">
                <Image
                  src={teamPicture[index]}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-lg object-cover mb-4"
                />
                <h4 className="text-lg font-semibold">{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.title}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-2">{t.team.contact_title}</h3>
          <p className="text-muted-foreground mb-4">
            {t.team.contact_text}
          </p>
          <a href={`mailto:${t.team.contact_email}`} className="text-primary hover:underline font-medium">
            {t.team.contact_email}
          </a>
        </div>
      </div>
    </section>
  )
}
