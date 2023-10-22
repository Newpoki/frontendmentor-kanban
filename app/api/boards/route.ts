import { boardDialogFormSchema } from '@/app/boards/boards-utils';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { NextRequest } from 'next/server';
import { authConfig } from '../auth/[...nextauth]/route';
import { slugify } from '../utils/slugify';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    const session = await getServerSession(authConfig);

    if (session?.user == null) {
        return Response.json({ status: 403 });
    }

    const user = await prisma.user.findUnique({
        where: {
            email: session.user.email ?? undefined,
        },
    });

    if (user == null) {
        return Response.json({ status: 403 });
    }

    const body = await request.json();

    const parsedBody = boardDialogFormSchema.safeParse(body);

    if (!parsedBody.success) {
        return Response.json({ status: 400 });
    }

    const { columns, name } = parsedBody.data;

    const board = await prisma.board.create({
        data: {
            name,
            userId: user.id,
            columns: {
                createMany: {
                    data: columns,
                },
            },
            slug: slugify(name),
        },
    });

    return Response.json({ status: 200, data: { board } });
}

export async function GET() {
    const session = await getServerSession(authConfig);

    if (session?.user == null) {
        return Response.json({ status: 403, message: 'Session not found' });
    }

    const user = await prisma.user.findUnique({
        where: {
            email: session.user.email ?? undefined,
        },
    });

    if (user == null) {
        return Response.json({ status: 403, message: 'User not found' });
    }

    const boards = await prisma.board.findMany({
        where: {
            userId: user.id,
        },
    });

    return Response.json({ status: 200, data: boards });
}
