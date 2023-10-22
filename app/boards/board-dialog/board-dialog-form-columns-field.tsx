'use client';

import { FieldArrayWithId } from 'react-hook-form';
import { useCallback } from 'react';
import { ControlledTextField } from '@/app/components/forms/controlled-textfield';
import { BoardDialogFormValues } from '../boards-utils';

type Props = {
    field: FieldArrayWithId<BoardDialogFormValues, 'columns'>;
    index: number;
    onDelete: (columnIndex: number) => void;
};

export const BoardDialogFormColumnsField = ({ field, index, onDelete }: Props) => {
    const handleDelete = useCallback(() => {
        onDelete(index);
    }, [index, onDelete]);

    return (
        <div key={field.id} className="flex flex-col gap-2">
            <ControlledTextField
                {...field}
                name={`columns.${index}.name`}
                label={index === 0 ? 'Board Columns' : undefined}
                placeholder="e.g. Todo"
                onDelete={handleDelete}
            />

            <ControlledTextField
                {...field}
                name={`columns.${index}.color`}
                className="w-1/2"
                placeholder="#123456"
            />
        </div>
    );
};
