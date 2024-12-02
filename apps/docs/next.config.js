/** @type {import('next').NextConfig} */
const nextConfig = {
	// assetPrefix: "https://next-12-monorepo-docs-netlify.netlify.app",
	reactStrictMode: true,
	// rewrites: async () => ({
	// 	beforeFiles: [
	// 		{
	// 			destination: "/_next/:path*",
	// 			source: "/docs-static/_next/:path*",
	// 		},
	// 	],
	// }),
	swcMinify: true,
};

module.exports = nextConfig;
