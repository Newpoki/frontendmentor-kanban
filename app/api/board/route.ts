import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export type BoardResponseBoardColumnTaskSubtask = {
    id: string;
    name: string;
    done: boolean;
    taskId: string | null;
};

export type BoardResponseBoardColumnTask = {
    id: string;
    name: string;
    columnId: string;
    subtasks: BoardResponseBoardColumnTaskSubtask[];
};

type BoardResponseBoardColumn = {
    tasks: BoardResponseBoardColumnTask[];
    id: string;
    name: string;
    color: string;
    boardId: string;
};

export type BoardResponse = {
    status: NextResponse<string>;
    data: {
        board: {
            columns: BoardResponseBoardColumn[];
            id: string;
            name: string;
            slug: string;
        };
    };
};

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;

    const boardSlug = searchParams.get('slug');

    if (boardSlug == null) {
        return Response.json({ message: 'Missing board slug' }, { status: 400 });
    }

    const board = await prisma.board.findUnique({
        where: {
            slug: boardSlug,
        },
        select: {
            id: true,
            columns: true,
            name: true,
            slug: true,
        },
    });

    if (board == null) {
        return Response.json({ message: 'Board not found' }, { status: 404 });
    }

    const tasks = await prisma.task.findMany({
        where: {
            boardId: board.id,
        },
        select: {
            subtasks: true,
            columnId: true,
            name: true,
            id: true,
        },
    });

    const mappedColumns = board.columns.map((column) => {
        return {
            ...column,
            tasks: tasks.filter((task) => task.columnId === column.id),
        };
    });

    const boardWithMappedColumns = {
        ...board,
        columns: mappedColumns,
    };

    return Response.json({ data: { board: boardWithMappedColumns } });
}
