/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["gsap"],
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/briefing/fae4",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
