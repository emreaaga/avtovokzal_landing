/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.mds.yandex.net',
      },
      {
        protocol: 'https',
        hostname: 'yuz.uz'
      },
      {
        protocol: 'https',
        hostname: 'pechater.ru'
      },
    ],
  },
}

export default nextConfig
