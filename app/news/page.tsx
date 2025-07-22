'use client'

import * as React from 'react'
import Link from 'next/link'
import { useTranslation } from "@/lib/useTranslation"


export default function NewsPage() {
  const t = useTranslation()

  const { items } = t.news


  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t.news.title}
        </h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          {t.news.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-xl overflow-hidden shadow hover:shadow-md transition"
            >
              <img
                src={item.cover}
                alt={item.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
                <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                <p className="text-sm text-gray-700 mb-4">{item.excerpt}</p>
                <p
                  className="inline-block text-primary hover:underline font-medium cursor-pointer"
                >
                  {t.news.read_more}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
