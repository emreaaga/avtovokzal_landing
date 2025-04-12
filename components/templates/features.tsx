'use client'
import { useTranslation } from '@/lib/useTranslation'

export default function Features() {
  const t = useTranslation()

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">{t.features.title}</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-12">{t.features.subtitle}</p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-3">🚌</div>
            <h3 className="font-semibold text-lg mb-1">{t.features.cards.booking.title}</h3>
            <p className="text-sm text-muted-foreground">{t.features.cards.booking.text}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-3">🛋</div>
            <h3 className="font-semibold text-lg mb-1">{t.features.cards.buses.title}</h3>
            <p className="text-sm text-muted-foreground">{t.features.cards.buses.text}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="font-semibold text-lg mb-1">{t.features.cards.coverage.title}</h3>
            <p className="text-sm text-muted-foreground">{t.features.cards.coverage.text}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-3">📞</div>
            <h3 className="font-semibold text-lg mb-1">{t.features.cards.support.title}</h3>
            <p className="text-sm text-muted-foreground">{t.features.cards.support.text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
