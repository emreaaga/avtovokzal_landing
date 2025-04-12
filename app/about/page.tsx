'use client'
import { useTranslation } from "@/lib/useTranslation"

export default function AboutPage() {
    const t = useTranslation()

    return (
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">О нас</h1>
          <p className="text-lg text-muted-foreground mb-4">
            ООО «UzAvtovokzal Servis» — единый транспортный сервис, обслуживающий междугородние и международные автобусные маршруты.
          </p>
          <p className="mb-4">
            Мы стремимся обеспечить безопасные, удобные и доступные поездки для всех жителей и гостей Узбекистана.
          </p>
          <p>
            Центральный автовокзал в Ташкенте ежедневно обслуживает тысячи пассажиров и является связующим звеном между регионами страны.
          </p>
          <p>{t.about}</p>
          <p>{t.greeting}</p>
        </div>
      </section>
    )
  }
  