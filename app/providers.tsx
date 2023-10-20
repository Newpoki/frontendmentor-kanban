'use client';

import { ThemeProvider } from 'next-themes';

type Props = {
    children: React.ReactNode;
};

export const Providers = ({ children }: Props) => {
    return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};
