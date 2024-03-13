/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production"

const nextConfig = () => {
  if (isProduction) {
    return {
      reactStrictMode: true,
      output: 'export',
      distDir: 'dist',
      basePath: '/nextjstest',
      assetPrefix: '/nextjstest/'
    }
  }

  return {
    reactStrictMode: true,
  };

}

export default nextConfig();


