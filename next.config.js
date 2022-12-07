/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'myimages.carlosgperez.com',
        pathname: '/portfolio/**',
      },
    ],
  },
};

module.exports = nextConfig;
