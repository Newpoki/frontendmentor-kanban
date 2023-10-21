import { twMerge } from 'tailwind-merge';
import { FieldLabel } from './field-label';

type Props = React.HTMLAttributes<HTMLInputElement> & {
    error?: string;
    inputClassName?: string;
    label?: string;
};

export const TextField = ({ className, error, id, inputClassName, label, ...others }: Props) => {
    return (
        <div className={twMerge('flex flex-col gap-2', className)}>
            {label != null && <FieldLabel htmlFor={id}>{label}</FieldLabel>}

            <div
                className={twMerge(
                    'border-1 flex items-center gap-2 rounded-[4px] border-solid border-grey500/25 px-4 py-2 text-body-l transition-colors focus-within:border-grey500 hover:border-grey500',
                    error != null && 'border-red500 focus-within:border-red500 hover:border-red500'
                )}
            >
                <input
                    {...others}
                    className={twMerge(
                        'bg-transparent  outline-none placeholder:text-grey500/25',

                        inputClassName
                    )}
                    id={id}
                />
                {error != null && <span className=" text-red500">{error}</span>}
            </div>
        </div>
    );
};