'use client'
import { useTranslation } from '@/lib/useTranslation'

export default function WaitingList() {
  const t = useTranslation()

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Карта */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 h-[300px]">
            <iframe
              src="https://yandex.uz/map-widget/v1/-/CHVXuE-~"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Автовокзал на карте"
            />
          </div>

          {/* Контактная информация */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">{t.contact.title}</h2>
              <p className="text-muted-foreground">{t.contact.description}</p>
            </div>

            <div className="space-y-3 text-base">
              <p>📍 <strong>{t.contact.address.label}:</strong> {t.contact.address.value}</p>
              <p>📞 <strong>{t.contact.phone.label}:</strong> {t.contact.phone.value}</p>
              <p>📩 <strong>{t.contact.email.label}:</strong> <a href={`mailto:${t.contact.email.value}`} className="text-primary underline">{t.contact.email.value}</a></p>
            </div>

            <a
              href="https://yandex.uz/maps/-/CHVXuE-~"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition font-medium"
            >
              {t.contact.button_route}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
