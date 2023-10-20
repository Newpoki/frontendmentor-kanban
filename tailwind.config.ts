import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            purple300: '#A8A4FF',
            purple500: '#635FC7',
            black: '#000112',
            white: '#FFFFFF',
            grey900: '#20212C',
            grey800: '#2B2C37',
            grey700: '#3E3F4E',
            grey500: '#828FA3',
            grey300: '#E4EBFA',
            grey100: '#F4F7FD',
            red500: '#EA5555',
            red300: '#FF9898',
        },
        extend: {},
    },
    plugins: [],
};
export default config;
