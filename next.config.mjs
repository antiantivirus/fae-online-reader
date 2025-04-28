/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["gsap"],
  reactStrictMode: true,
  images: {
    domains: ["futureartecosystems.org"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/briefing/fae5",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
