/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.futura-sciences.com',
      },
      {
        protocol: 'https',
        hostname: 'cataas.com',
      },
      {
        protocol: 'https',
        hostname: 'www.lesrecettesdedaniel.fr',
      },
      {
        protocol: 'https',
        hostname: 'www.publicdomainpictures.net',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'www.google.com',
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'www.woopets.fr',
      },
      {
        protocol: 'https',
        hostname: 'image.noelshack.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/donation-success',
        destination: '/donation-success',
      },
    ];
  },
};

export default nextConfig;