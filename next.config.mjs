/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_API: "https://cyparta-backend-gf7qm.ondigitalocean.app/api",
  },
  images: {
    domains: [
      "sadakatcdn.cyparta.com"
    ],
  },
};

export default nextConfig;
