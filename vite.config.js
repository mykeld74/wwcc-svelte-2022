import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	base: 'http://localhost:3000',

	css: {
		preprocessorOptions: {
			scss: {}
		}
	}
};

export default config;
