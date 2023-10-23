import {
    BoardResponseBoardColumnTask,
    BoardResponseBoardColumnTaskSubtask,
} from '@/app/api/board/route';
import { notFound } from 'next/navigation';
import { BoardTaskDialog } from './board-task-dialog/board-task-dialog';
import { TaskResponse } from '@/app/api/task/route';
import Link from 'next/link';

const getDisplayedSubtaskLabel = (subtasks: BoardResponseBoardColumnTaskSubtask[]) => {
    if (subtasks == null || subtasks.length === 0) {
        return 'No subtasks';
    }

    const doneSubtasks = subtasks.filter((subtask) => subtask.done);
    const suffix = subtasks.length > 1 ? 'subtasks' : 'subtask';

    return `${doneSubtasks.length} / ${subtasks.length} ${suffix}`;
};

type Props = {
    boardTask: BoardResponseBoardColumnTask;
    searchParams: {
        taskId?: string;
    };
};

export async function fetchTask(taskId: Props['boardTask']['id']) {
    const task = await fetch(`http://localhost:3000/api/task?id=${taskId}`);

    if (!task.ok) {
        notFound();
    }

    const response = (await task.json()) as TaskResponse;

    return response.data;
}

export const BoardTaskCard = async ({ boardTask }: Props) => {
    const { task: fullTask, columns } = await fetchTask(boardTask.id);

    const displayedSubtaskLabel = getDisplayedSubtaskLabel(boardTask.subtasks);

    return (
        <>
            <Link href={`/boards/test?taskId=${boardTask.id}`}>
                <div className="flex flex-col gap-2 rounded-lg bg-white px-4 py-6 shadow-md">
                    <p className="text-heading-m">{boardTask.name}</p>
                    <span className="text-body-m text-grey500">{displayedSubtaskLabel}</span>
                </div>
            </Link>

            <BoardTaskDialog task={fullTask} columns={columns} />
        </>
    );
};
