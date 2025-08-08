/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
        port: "",
        pathname: "/**",
      },
      // Add this new entry for your own domain
      {
        protocol: "https",
        hostname: "skiper-ui.com",
        port: "",
        pathname: "/**",
      },
      // You should also add i.giphy.com if you're loading it directly
      {
        protocol: "https",
        hostname: "i.giphy.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
