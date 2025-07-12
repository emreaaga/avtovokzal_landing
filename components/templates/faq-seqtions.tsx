'use client'

import { useTranslation } from '@/lib/useTranslation'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/molecules/shadcn/accordion'

export default function FaqSections() {
  const t = useTranslation()

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-4">{t.faq.title}</h2>

        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          {t.faq.items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                {item.answer.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
