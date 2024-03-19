/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["gsap"],
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/briefings/fae4",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
