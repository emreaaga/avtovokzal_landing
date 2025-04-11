import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-primary py-10 text-secondary'>
      <div className='container mx-auto px-4 md:px-6 lg:px-8'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>


          <div>
            <h3 className='text-lg font-semibold text-gray-200'>Навигация</h3>
            <ul className='mt-4 space-y-2'>
              <li><Link className='hover:text-gray-300' href='/'>Главная</Link></li>
              <li><Link className='hover:text-gray-300' href='/about'>О нас</Link></li>
              <li><Link className='hover:text-gray-300' href='/news'>Новости</Link></li>
              <li><Link className='hover:text-gray-300' href='/schedule'>Расписание</Link></li>
            </ul>
          </div>


          <div>
            <h3 className='text-lg font-semibold text-gray-200'>Документы</h3>
            <ul className='mt-4 space-y-2'>
              <li><Link className='hover:text-gray-300' href='/terms'>Пользовательское соглашение</Link></li>
              <li><Link className='hover:text-gray-300' href='/privacy'>Политика конфиденциальности</Link></li>
              <li><Link className='hover:text-gray-300' href='/offer'>Публичная оферта</Link></li>
            </ul>
          </div>


          <div>
            <h3 className='text-lg font-semibold text-gray-200'>Контакты</h3>
            <ul className='mt-4 space-y-2 text-sm'>
              <li>г. Ташкент, пр. Бунёдкор, 7</li>
              <li>+998 71 123 45 67</li>
              <li><a className='hover:text-gray-300 underline' href='https://t.me/AvtovokzalBot' target='_blank'>@AvtovokzalBot</a></li>
            </ul>
          </div>


          <div>
            <h3 className='text-lg font-semibold text-gray-200'>Мы в сети</h3>
            <ul className='mt-4 space-y-2'>
              <li><a href='https://t.me/AvtovokzalBot' className='hover:text-gray-300'>Telegram</a></li>
              <li><a href='#' className='hover:text-gray-300'>Instagram</a></li>
              <li><a href='#' className='hover:text-gray-300'>YouTube</a></li>
            </ul>
          </div>
        </div>


        <div className='mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-400'>
          © 2024 UzAvtovokzal Servis. Все права защищены.
        </div>
      </div>
    </footer>
  )
}
