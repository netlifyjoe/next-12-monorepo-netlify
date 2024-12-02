/** @type {import('next').NextConfig} */
const nextConfig = {
	// assetPrefix: "/docs-static",
	basePath: "/docs",
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
