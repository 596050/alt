/** @type {import('next').NextConfig} */

const path = require('path')

const isDevelopment = process.env.NODE_ENV !== 'production'

const nextConfig = {
	poweredByHeader: false,
	reactStrictMode: true,
	productionBrowserSourceMaps: false,
	compress: true,
	transpilePackages: ['@packages/ui-components', '@packages/utils'],

	// modularizeImports: {
	//   '@acme/ui': {
	//     transform: '@acme/ui/dist/{{member}}',
	//   },
	// },

	images: {
		minimumCacheTTL: 3600,
		formats: ['image/avif', 'image/webp'],
		domains: ['static.ouorz.com', 'storage.snapaper.com', 'i.gr-assets.com'],
	},
	compiler: {
		// styledComponents: true,
		removeConsole: {
			exclude: ['log', 'error'],
		},
	},

	// FIXME: https://github.com/getsentry/sentry-javascript/issues/4103
	outputFileTracing: false,
	experimental: {
		appDir: true,
	},
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		config.module.rules.push({
			test: /FrutigerLTW01\/.+\.(woff|woff2)$/,
			type: 'asset',
			use: {
				loader: 'file-loader',
				options: {
					outputPath: 'static/media/',
					publicPath: '/',
					limit: 1,
				},
			},
		})

		config.module.rules.push({
			test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|mp4|pdf|webm)$/,
			type: 'asset',
			generator: {
				filename: 'static/media/[path][name].[hash][ext]',
			},
		})

		// if (!isServer) {
		// 	config.node = {
		// 	fs: 'empty',
		// 	dgram: 'empty',
		// 		net: 'empty',
		// 		tls: 'empty',
		// 		child_process: 'empty',
		// 	};

		// 	// config.plugins.push(
		// 	// 	new webpack.IgnorePlugin(/^(elastic-apm-node|bunyan)$/),
		// 	// );
		// 	// config.plugins.push(
		// 	// 	new webpack.IgnorePlugin({
		// 	// 		checkResource(resource, context) {
		// 	// 			// If I am including something from my backend directory, I am sure that this shouldn't be included in my frontend bundle
		// 	// 			if (
		// 	// 				resource.includes('/@packages/utils/') &&
		// 	// 				!context.includes('node_modules')
		// 	// 			) {
		// 	// 				return true;
		// 	// 			}
		// 	// 			return false;
		// 	// 		},
		// 	// 	}),
		// 	// );
		// }
		config.resolve.fallback = {
			fs: false,
			// dgram: false,
			// net: false,
			// tls: false,
			// child_process: false,
		}

		return config
	},
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

const withPWA = require('@ducanh2912/next-pwa').default({
	dest: 'public',
})

// const withPWA = require('next-pwa')({
// 	dest: 'public',
// 	disable: isDev,
// 	exclude: [
// 		// add buildExcludes here
// 		({ asset, compilation }) => {
// 			if (
// 				asset.name.startsWith('server/') ||
// 				asset.name.match(
// 					/^((app-|^)build-manifest\.json|react-loadable-manifest\.json)$/
// 				)
// 			) {
// 				return true
// 			}
// 			if (isDev && !asset.name.startsWith('static/runtime/')) {
// 				return true
// 			}
// 			return false
// 		},
// 	],
// })

module.exports = withBundleAnalyzer(withPWA(nextConfig))
