import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/* Note: The API Url should be from environment variables */

export default defineConfig({
	plugins: [react(), tailwindcss()],
	server: {
    proxy: {
      '/api': {
        target: 'http://demo3575906.mockable.io',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  
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
