/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL(
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085/**?w=800",
      ),
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
// https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800
