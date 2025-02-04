/** @type {import('next').NextConfig} */
const nextConfig = {
  // output:"Export",
  reactStrictMode: true,
};
module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '',
};


export default nextConfig;
