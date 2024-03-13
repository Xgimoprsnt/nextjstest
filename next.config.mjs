/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'dist',
  basePath: isProduction ? '/nextjstest' : '',
  assetPrefix: isProduction ? '/nextjstest' : '',
};
// dd

export default nextConfig;


