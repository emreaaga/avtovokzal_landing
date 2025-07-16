'use client'

import * as React from 'react'
import { useTranslation } from "@/lib/useTranslation"
import TeamCards from "@/components/templates/team-cards"

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
        
        <TeamCards members={t.about.team} />

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
