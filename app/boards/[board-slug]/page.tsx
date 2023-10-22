import { Header } from '@/app/header';
import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';

const prisma = new PrismaClient();

type Props = {
    params: {
        'board-slug': string;
    };
};

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

export default async function Board({ params }: Props) {
    const board = await fetchBoard(params);

    if (board == null) {
        return notFound();
    }

    return (
        <div className="flex flex-1 flex-col">
            <Header />

            <div className="flex flex-1 flex-col overflow-x-auto px-4 py-6">
                <main className="flex flex-1 gap-6 ">
                    {board.columns.map((column) => {
                        return (
                            <section key={column.id}>
                                <h3 className="text-heading-s flex w-[280px] items-center gap-3 uppercase text-grey500">
                                    <span
                                        className="h-4 w-4 rounded-full"
                                        style={{ backgroundColor: column.color }}
                                    />
                                    <span>{column.name} (4)</span>
                                </h3>
                            </section>
                        );
                    })}
                </main>
            </div>
        </div>
    );
}
