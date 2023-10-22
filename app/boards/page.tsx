import { Board } from '@prisma/client';
import { NoBoards } from './no-boards';
import { headers } from 'next/headers';
import { Header } from '../header';

export async function fetchBoards(): Promise<{ data: Board[] }> {
    const boards = await fetch('http://localhost:3000/api/boards', {
        headers: headers(),
        next: {
            tags: ['boards'],
        },
    });

    return await boards.json();
}

export default async function Boards() {
    const boards = await fetchBoards();

    return (
        <div className="flex flex-1 flex-col">
            <Header />

            <div className="flex flex-1 flex-col px-4 py-6">
                <main className="flex flex-1 flex-col">
                    {boards.data.length === 0 && <NoBoards />}
                    {boards.data.length > 0 && (
                        <div>
                            {boards.data.map((board) => (
                                <span key={board.id}>{board.name}</span>
                            ))}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
