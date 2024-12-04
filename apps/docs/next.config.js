/** @type {import('next').NextConfig} */
// testing something
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	assetPrefix: "/docs",
	async rewrites() {
		return [
			{
				source: "/docs/_next/:path*",
				destination: "/_next/:path*",
			},
		];
	},
};
module.exports = nextConfig;
