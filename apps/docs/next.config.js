/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	assetPrefix: process.env.NODE_ENV === 'production' 
	  ? '/'  // In production, serve from root
	  : '/docs',  // In development, serve from /docs
	async rewrites() {
	  // Only apply rewrites in development
	  if (process.env.NODE_ENV !== 'production') {
		return [{
		  source: "/docs/_next/:path*",
		  destination: "/_next/:path*",
		}]
	  }
	  return []
	}
  };
  module.exports = nextConfig;