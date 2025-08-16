// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	css: ['@/assets/scss/index.scss'],
	modules: ['@nuxt/eslint', '@pinia/nuxt'],
	ssr: true,
	app: {
		head: {
			titleTemplate: '%s',
			title: 'Test',
			meta: [
				{ charset: 'utf-8' },
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
				},
				{ name: 'theme-color', content: '#ffffff' },
			],
			bodyAttrs: {},
			htmlAttrs: { lang: 'ru' },
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
			script: [],
		},
	},

	devServer: {
		host: '0.0.0.0',
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/scss/config/index.scss" as *;',
				},
			},
		},
	},
});
