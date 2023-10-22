import {
    BoardResponseBoardColumnTask,
    BoardResponseBoardColumnTaskSubtask,
} from '@/app/api/board/route';

const getDisplayedSubtaskLabel = (subtasks: BoardResponseBoardColumnTaskSubtask[]) => {
    if (subtasks == null || subtasks.length === 0) {
        return 'No subtasks';
    }

    const doneSubtasks = subtasks.filter((subtask) => subtask.done);
    const suffix = subtasks.length > 1 ? 'subtasks' : 'subtask';

    return `${doneSubtasks.length} / ${subtasks.length} ${suffix}`;
};

type Props = {
    task: BoardResponseBoardColumnTask;
};

export const BoardTaskCard = ({ task }: Props) => {
    const displayedSubtaskLabel = getDisplayedSubtaskLabel(task.subtasks);

    return (
        <div className="flex flex-col gap-2 rounded-lg bg-white px-4 py-6 shadow-md">
            <p className="text-heading-m">{task.name}</p>
            <span className="text-body-m text-grey500">{displayedSubtaskLabel}</span>
        </div>
    );
};
