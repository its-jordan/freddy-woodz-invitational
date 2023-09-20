/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    formats: ['image/gif', 'image/png'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.smogon.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'js-yaml-loader',
    });
    return config;
  },
};
