/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ng.jumia.is',
            port: '',
          },
        ],
      },
};

export default nextConfig;
