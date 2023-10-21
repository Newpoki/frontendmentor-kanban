import { twMerge } from 'tailwind-merge';

type Props = React.HTMLAttributes<HTMLButtonElement> & {
    size?: 'small' | 'medium';
    color?: 'primary' | 'secondary' | 'error';
};

const colors = {
    primary: 'bg-purple500 hover:bg-purple300 text-white',
    secondary: 'bg-purple500/10 hover:bg-purple500/25 text-purple500',
    error: 'bg-red500 hover:bg-red300 text-white',
} as const;

const sizes = {
    small: 'py-2 rounded-[20px] text-[13px] leading-[23px]',
    medium: 'py-4 rounded-3xl text-[15px] leading-none',
} as const;

export const Button = ({ className, color = 'primary', size = 'small', ...others }: Props) => {
    const colorClassNames = colors[color];
    const sizesClassNames = sizes[size];

    return (
        <button
            className={twMerge(
                'rounded px-5 font-bold transition-colors',
                colorClassNames,
                sizesClassNames,
                className
            )}
            {...others}
        />
    );
};
