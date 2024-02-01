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

      env : {
        stripe_public_key : process.env.STRIPE_PUBLIC_KEY,
        STRIPE_SECRET_KEY : process.env.STRIPE_SECRET_KEY
      }
};

export default nextConfig;
