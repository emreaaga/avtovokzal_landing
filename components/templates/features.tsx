import Image from 'next/image'

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Мы делаем поездки проще</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-12">
          Всё, что вам нужно для комфортного передвижения по Узбекистану — в одном месте.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-3">🚌</div>
            <h3 className="font-semibold text-lg mb-1">Удобное бронирование</h3>
            <p className="text-sm text-muted-foreground">Выберите маршрут и оплатите онлайн за пару минут.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-3">🛋</div>
            <h3 className="font-semibold text-lg mb-1">Комфортные автобусы</h3>
            <p className="text-sm text-muted-foreground">Мягкие кресла, кондиционеры, вежливые водители.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="font-semibold text-lg mb-1">Охват всех регионов</h3>
            <p className="text-sm text-muted-foreground">Рейсы по всей стране и за её пределы.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-3">📞</div>
            <h3 className="font-semibold text-lg mb-1">Поддержка 24/7</h3>
            <p className="text-sm text-muted-foreground">Наши операторы на связи круглосуточно.</p>
          </div>
        </div>
      </div>
    </section>
  )

}
