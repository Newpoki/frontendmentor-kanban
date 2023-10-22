'use client';

import { FieldArrayWithId } from 'react-hook-form';
import { BoardDialogFormValues } from '../types';
import { useCallback } from 'react';
import { ControlledTextField } from '@/app/components/forms/controlled-textfield';

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
        <ControlledTextField
            {...field}
            name={`columns.${index}.name`}
            key={field.id}
            label="Board Columns"
            placeholder="e.g. Todo"
            onDelete={handleDelete}
        />
    );
};
