import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

const prisma = new PrismaClient();

const config: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXT_AUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_PROVIDER_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_PROVIDER_CLIENT_SECRET as string,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code',
                },
            },
        }),
    ],
};

const handler = NextAuth(config);

export { handler as GET, handler as POST };
