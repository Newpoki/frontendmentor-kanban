import { LabelHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type FieldLabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export const FieldLabel = ({ className, ...others }: FieldLabelProps) => {
    return (
        <label
            {...others}
            className={twMerge('text-[12px] font-bold leading-none text-grey500', className)}
        />
    );
};
