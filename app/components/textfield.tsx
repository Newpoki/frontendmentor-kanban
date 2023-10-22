import { twMerge } from 'tailwind-merge';
import { FieldLabel } from './field-label';
import Delete from '@/public/assets/delete.svg';
import { forwardRef } from 'react';

export type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
    inputClassName?: string;
    label?: string;
    onDelete?: React.MouseEventHandler<HTMLButtonElement>;
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
    ({ className, error, id, inputClassName, label, onDelete, ...others }, ref) => {
        return (
            <div className={twMerge('flex flex-col gap-2', className)}>
                {label != null && <FieldLabel htmlFor={id}>{label}</FieldLabel>}

                <div className="flex w-full items-center gap-4">
                    <div
                        className={twMerge(
                            'flex w-full items-center gap-2 rounded-[4px] border-1 border-solid border-grey500/25 px-4 py-2 text-body-l transition-colors focus-within:border-grey500 hover:border-grey500',
                            error != null &&
                                'border-red500 focus-within:border-red500 hover:border-red500'
                        )}
                    >
                        <input
                            {...others}
                            ref={ref}
                            className={twMerge(
                                'w-full bg-transparent outline-none placeholder:text-grey500/25',

                                inputClassName
                            )}
                            id={id}
                        />
                        {error != null && <span className=" text-red500">{error}</span>}
                    </div>

                    {onDelete && (
                        <button onClick={onDelete} type="button">
                            <Delete className="w-4 text-grey500" />
                        </button>
                    )}
                </div>
            </div>
        );
    }
);
