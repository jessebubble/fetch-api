/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'centro-green': '#ACDB6B',
                'centro-yellow': '#FACB11',
                'centro-blue': '#1DB7BA',
                'centro-pink': '#F13F6D',
                'centro-orange': '#F89225',
                'cosa-white': '#EEEEEE',
            },
        },
    },
    plugins: [],
};
