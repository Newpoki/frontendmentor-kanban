import { Header } from '@/app/header';
import { PrismaClient } from '@prisma/client';

type Props = {
    children: React.ReactNode;
    params: {
        'board-slug': string;
    };
};

const prisma = new PrismaClient();

const fetchBoard = async (params: Props['params']) => {
    const board = prisma.board.findFirst({
        where: {
            slug: params['board-slug'],
        },
        include: {
            columns: true,
        },
    });

    return board;
};

export default async function BoardLayout({ children, params }: Props) {
    const board = await fetchBoard(params);

    return (
        <div className="flex flex-1 flex-col">
            <Header boardName={board.name} />

            <div className="flex flex-1 flex-col overflow-x-auto px-4 py-6">{children}</div>
        </div>
    );
}
