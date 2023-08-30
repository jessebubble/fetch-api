import dotenv from 'dotenv';
dotenv.config();

import react from '@vitejs/plugin-react';
import plugin from 'tailwindcss';

export default {

    build: {
        // ...
    },
    plugins: [
        react(), 
        plugin()
    ],
    define: {
        'process.env': {
            VITE_OPENWEATHER_API_KEY: JSON.stringify(process.env.VITE_OPENWEATHER_API_KEY),
        },
    },
}