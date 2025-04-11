import { Button } from '@/components/molecules/shadcn/button'
import { Badge } from '../molecules/shadcn/badge'
import { Input } from '../molecules/shadcn/input'

export default function WaitingList() {
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
          <h2 className="text-3xl font-bold">Контакты и расположение</h2>
          <p className="text-muted-foreground">
            Мы находимся в удобном районе города Ташкента. Добраться до нас можно общественным транспортом, на такси или пешком.
          </p>
        </div>

        <div className="space-y-3 text-base">
          <p>📍 <strong>Адрес:</strong> г. Ташкент, Чиланзарский район, проспект Бунёдкор, 7</p>
          <p>📞 <strong>Телефон:</strong> +998 71 123 45 67</p>
          <p>💬 <strong>Telegram:</strong> <a href="https://t.me/AvtovokzalBot" className="text-primary underline">@AvtovokzalBot</a></p>
        </div>

        <a
          href="https://yandex.uz/maps/-/CHVXuE-~"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition font-medium"
        >
          Проложить маршрут
        </a>
      </div>
    </div>
  </div>
</section>



  )
}
