/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "pbs.twimg.com",
      "images.squarespace-cdn.com",
      "encrypted-tbn0.gstatic.com",
      "elireview.com",
      "assets.aceternity.com",
      "images.unsplash.com",
      "easy-peasy.ai", // Add any other hostname here
    ],
  },
};

export default nextConfig;
