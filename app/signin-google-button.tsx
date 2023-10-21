'use client';

import LogoGoogle from '@/public/assets/logo-google.svg';
import { signIn } from 'next-auth/react';
import { useCallback } from 'react';

export const SigninGoogleButton = () => {
    const handleClick = useCallback(() => {
        signIn('google', { callbackUrl: '/boards', redirect: true });
    }, []);

    return (
        <button
            className="flex items-center justify-center gap-3 rounded-lg bg-white px-4 py-4 shadow-md hover:bg-grey100"
            type="button"
            onClick={handleClick}
        >
            <LogoGoogle className="w-5" />
            <span className="text-body-m">Sign in with Google</span>
        </button>
    );
};
