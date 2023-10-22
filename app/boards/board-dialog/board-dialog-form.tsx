'use client';

import { Button } from '@/app/components/button';
import { DialogActions } from '@/app/components/dialog/dialog-actions';
import { DialogContent } from '@/app/components/dialog/dialog-content';
import { ControlledTextField } from '@/app/components/forms/controlled-textfield';
import { FormProvider } from '@/app/components/forms/form-provider';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { BoardDialogFormColumns } from './board-dialog-form-columns';
import { BoardDialogFormValues } from '../types';

export const BoardDialogForm = () => {
    const formContext = useForm<BoardDialogFormValues>({
        defaultValues: {
            name: '',
            columns: [{ name: '' }],
        },
    });

    const handleSubmit = useCallback(() => {
        console.log('submit');
    }, []);

    return (
        <FormProvider onSubmit={handleSubmit} formContext={formContext}>
            <DialogContent className="mb-6">
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
