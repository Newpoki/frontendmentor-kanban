import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Kanban',
    description: 'A personal Kanban application',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body
                className={`${jakarta.className} flex min-h-[100dvh] flex-1 flex-col bg-grey100 text-black transition-colors`}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
