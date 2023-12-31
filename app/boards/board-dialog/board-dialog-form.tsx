'use client';

import { Button } from '@/app/components/button';
import { DialogActions } from '@/app/components/dialog/dialog-actions';
import { DialogContent } from '@/app/components/dialog/dialog-content';
import { ControlledTextField } from '@/app/components/forms/controlled-textfield';
import { FormProvider } from '@/app/components/forms/form-provider';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { BoardDialogFormColumns } from './board-dialog-form-columns';
import { BoardDialogFormValues, boardDialogFormSchema } from '../boards-utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

export const BoardDialogForm = () => {
    const router = useRouter();

    const formContext = useForm<BoardDialogFormValues>({
        resolver: zodResolver(boardDialogFormSchema),
        defaultValues: {
            name: '',
            columns: [{ name: '', color: '' }],
        },
    });

    const handleSubmit = useCallback(
        async (formValues: BoardDialogFormValues) => {
            return new Promise<void>(async (resolve, reject) => {
                try {
                    const response = await fetch('/api/boards', {
                        method: 'POST',
                        body: JSON.stringify(formValues),
                    });

                    const jsonResponse = await response.json();

                    router.push(`/boards/${jsonResponse.data.board.slug}`);
                } catch {
                    reject();
                }
            }).catch(console.error);
        },
        [router]
    );

    return (
        <FormProvider
            className="flex flex-1 flex-col overflow-y-hidden"
            onSubmit={handleSubmit}
            formContext={formContext}
        >
            <DialogContent>
                <ControlledTextField
                    name="name"
                    className="mb-6"
                    label="Board Name"
                    placeholder="e.g. Web Design"
                />

                <BoardDialogFormColumns />
            </DialogContent>

            <DialogActions>
                <Button type="submit">Create New board</Button>
            </DialogActions>
        </FormProvider>
    );
};
