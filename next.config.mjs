/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ng.jumia.is',
            port: '',
          },

          {
            protocol: 'https',
            hostname: 'm.media-amazon.com',
            port: '',
          },

          {
            protocol: 'https',
            hostname: "fdn2.gsmarena.com" ,
            port: '',
          },

          {
            protocol: 'https',
            hostname: "fdn.gsmarena.com" ,
            port: '',
          },
        ],
      },
};

export default nextConfig;
