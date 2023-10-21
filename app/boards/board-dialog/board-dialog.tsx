'use client';

import { Button } from '@/app/components/button';
import { Dialog, DialogProps } from '@/app/components/dialog/dialog';
import { DialogActions } from '@/app/components/dialog/dialog-actions';
import { DialogContent } from '@/app/components/dialog/dialog-content';
import { DialogTitle } from '@/app/components/dialog/dialog-title';
import { TextField } from '@/app/components/textfield';
import { useCallback } from 'react';

type Props = Omit<DialogProps, 'children'>;

export const BoardDialog = ({ isOpen, onClose }: Props) => {
    const handleDelete = useCallback(() => {
        console.log('delete');
    }, []);

    return (
        <Dialog isOpen={isOpen} onClose={onClose}>
            <DialogTitle>Add New Board</DialogTitle>

            <DialogContent>
                <TextField className="mb-6" label="Board Name" placeholder="e.g. Web Design" />

                <div className="flex flex-col gap-3">
                    <TextField
                        label="Board Columns"
                        placeholder="e.g. Todo"
                        onDelete={handleDelete}
                    />

                    <TextField className="w-full" placeholder="e.g. Todo" onDelete={handleDelete} />

                    <Button color="secondary">+ Add New Column</Button>
                </div>
            </DialogContent>

            <DialogActions>
                <Button>Create New board</Button>
            </DialogActions>
        </Dialog>
    );
};
