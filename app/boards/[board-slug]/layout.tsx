import { BoardResponse } from '@/app/api/board/route';
import { Header } from '@/app/header';
import { notFound } from 'next/navigation';

type Props = {
    children: React.ReactNode;
    params: {
        'board-slug': string;
    };
};

const fetchBoard = async (params: Props['params']) => {
    const board = await fetch(`http://localhost:3000/api/board?slug=${params['board-slug']}`);

    if (!board.ok) {
        notFound();
    }

    const response = (await board.json()) as BoardResponse;

    return response.data.board;
};

export default async function BoardLayout({ children, params }: Props) {
    const board = await fetchBoard(params);

    return (
        <div className="flex flex-1 flex-col">
            <Header boardName={board?.name} />

            <div className="flex flex-1 flex-col overflow-x-auto px-4 py-6">{children}</div>
        </div>
    );
}
