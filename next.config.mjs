/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.futura-sciences.com',
      'cataas.com',
      'www.lesrecettesdedaniel.fr',
      'www.publicdomainpictures.net',
      'example.com',
      'via.placeholder.com',
      'www.google.com',
      'media.istockphoto.com',
      'localhost',
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
