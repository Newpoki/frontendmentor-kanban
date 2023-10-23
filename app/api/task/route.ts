import { PrismaClient, Task } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

type TaskResponseTaskSubtask = {
    id: string;
    name: string;
    done: boolean;
    taskId: string | null;
};

type TaskResponseTask = {
    name: Task['name'];
    description: Task['description'];
    subtasks: Array<TaskResponseTaskSubtask>;
    columnId: Task['columnId'];
    boardId: Task['boardId'];
};

type TaskResponseColumn = {
    id: string;
    name: string;
    color: string;
    boardId: string;
};

export type TaskResponse = {
    status: NextResponse;
    data: {
        task: TaskResponseTask;
        columns: Array<TaskResponseColumn>;
    };
};

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;

    const taskId = searchParams.get('id');

    if (taskId == null) {
        return Response.json({ message: 'Missing task id' }, { status: 400 });
    }

    const task = await prisma.task.findUnique({
        where: {
            id: taskId,
        },
        select: {
            name: true,
            description: true,
            subtasks: true,
            columnId: true,
            boardId: true,
        },
    });

    if (task == null) {
        return Response.json({ message: 'Task not found' }, { status: 404 });
    }

    const board = await prisma.board.findUnique({
        where: {
            id: task.boardId,
        },
    });

    if (board == null) {
        return Response.json({ message: 'Board not found' });
    }

    const columns = await prisma.boardColumn.findMany({
        where: {
            boardId: board.id,
        },
    });

    if (columns == null) {
        return Response.json({ message: 'Board columns not found ' });
    }

    return Response.json({ data: { task, columns } });
}
