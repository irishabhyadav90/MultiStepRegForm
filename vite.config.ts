import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve:{
		alias:{
			'@': '/src',
			'@components': '/src/components',
			'@common': '/src/components/common',
			'@hooks': '/src/hooks',
			'@utils': '/src/utils',
			'@constants': '/src/constants',
			'@assets': '/src/assets',
			'@layout': '/src/components/layout',
			'@registration': '/src/components/registration',
			'@steps': '/src/components/registration/steps'	
		}
	}
});
