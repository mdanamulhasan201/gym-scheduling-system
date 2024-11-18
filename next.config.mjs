/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack(config) {
      // Custom webpack config here, if needed
      return config;
    },
  };
  
  export default nextConfig;
  