import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import plugin from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
        plugins: [react(), plugin()],
        define: {
            __APP_ENV__: JSON.stringify(env.APP_ENV),
        },
        build: {
            sourcemap: true,
            rollupOptions: {
                external: process.env.VITE_API_KEY
            }
        },
    };
});

