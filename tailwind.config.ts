import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            tablet: '768px',
            desktop: '1440px',
        },
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
            transparent: 'transparent',
        },
        fontSize: {
            'heading-xl': ['24px', { fontWeight: 700, lineHeight: 'normal' }],
            'heading-l': ['18px', { fontWeight: 700, lineHeight: 'normal' }],
            'heading-m': ['15px', { fontWeight: 700, lineHeight: 'normal' }],
            'body-l': ['13px', { fontWeight: 500, lineHeight: '23px' }],
            'body-m': ['12px', { fontWeight: 700, lineHeight: 'normal' }],
        },
        extend: {
            borderWidth: {
                DEFAULT: '1px',
                1: '1px',
            },
        },
    },
    plugins: [],
};
export default config;
