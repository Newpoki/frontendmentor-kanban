import { notFound } from 'next/navigation';
import { BoardTaskCard } from './board-task-card';
import { BoardResponse } from '@/app/api/board/route';

type Props = {
    params: {
        'board-slug': string;
    };
    searchParams: {
        taskId?: string;
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

export default async function Board({ params, searchParams }: Props) {
    const board = await fetchBoard(params);

    return (
        <main className="flex flex-1 gap-6 ">
            {board.columns.map((column) => {
                return (
                    <section key={column.id} className="flex flex-col gap-6">
                        <h3 className="flex w-[280px] items-center gap-3 text-heading-s uppercase text-grey500">
                            <span
                                className="h-4 w-4 rounded-full"
                                style={{ backgroundColor: column.color }}
                            />
                            <span>{column.name} (4)</span>
                        </h3>

                        <ul>
                            {column.tasks.map((task) => {
                                return (
                                    <li key={task.id}>
                                        <BoardTaskCard
                                            boardTask={task}
                                            searchParams={searchParams}
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                    </section>
                );
            })}
        </main>
    );
}
