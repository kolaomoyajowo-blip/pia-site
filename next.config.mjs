/** @type {import('next').NextConfig} */
const nextConfig = {
  // your existing image settings
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
    ],
  },

  // NEW: send /membership (and any sub-paths) to your Cloudflare site
  async redirects() {
    return [
      {
        source: '/membership',
        destination: 'https://membership.privacyintelligenceacademy.org',
        permanent: false, // change to true later if you want a permanent 308
      },
      {
        source: '/membership/:path*',
        destination: 'https://membership.privacyintelligenceacademy.org/:path*',
        permanent: false,
      },
      // (Optional convenience) /join will also go to membership:
      {
        source: '/join',
        destination: 'https://membership.privacyintelligenceacademy.org',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
