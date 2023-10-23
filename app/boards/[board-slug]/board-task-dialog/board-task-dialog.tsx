'use client';

import { TaskResponse } from '@/app/api/task/route';
import { Dialog } from '@/app/components/dialog/dialog';
import { DialogContent } from '@/app/components/dialog/dialog-content';
import { DialogTitle } from '@/app/components/dialog/dialog-title';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

type Props = {
    task: TaskResponse['data']['task'];
    columns: TaskResponse['data']['columns'];
};

export async function BoardTaskDialog({ task, columns }: Props) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const searchTaskId = searchParams.get('taskId');

    const isOpen = searchTaskId != null && searchTaskId.length > 0;

    const handleClose = useCallback(() => {
        const urlSearchParams = new URLSearchParams(searchParams);

        urlSearchParams.delete('taskId');

        router.push(`${pathname}?${urlSearchParams.toString()}`);
    }, [pathname, router, searchParams]);

    return (
        <Dialog isOpen={isOpen} onClose={handleClose}>
            <DialogTitle>{task.name}</DialogTitle>
            <DialogContent>
                <p className="text-body-l text-grey500">{task.description}</p>
                <h4>Subtasks (2/3)</h4>
            </DialogContent>
        </Dialog>
    );
}
