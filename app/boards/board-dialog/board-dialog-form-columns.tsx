'use client';

import { useFieldArray, useFormContext } from 'react-hook-form';
import { Button } from '@/app/components/button';
import { BoardDialogFormColumnsField } from './board-dialog-form-columns-field';
import { useCallback } from 'react';
import { BoardDialogFormValues } from '../boards-utils';

export const BoardDialogFormColumns = () => {
    const { control } = useFormContext<BoardDialogFormValues>();

    const { fields, remove, append, update } = useFieldArray({ control, name: 'columns' });

    const handleAddNewColumn = useCallback(() => {
        append({ name: '', color: '' });
    }, [append]);

    const handleDeleteColumn = useCallback(
        (columnIndex: number) => {
            fields.length === 1 ? update(0, { name: '', color: '' }) : remove(columnIndex);
        },
        [fields.length, remove, update]
    );

    return (
        <div className="flex flex-col gap-3">
            {fields.map((field, index) => {
                return (
                    <BoardDialogFormColumnsField
                        key={field.id}
                        field={field}
                        index={index}
                        onDelete={handleDeleteColumn}
                    />
                );
            })}

            <Button color="secondary" type="button" onClick={handleAddNewColumn}>
                + Add New Column
            </Button>
        </div>
    );
};
