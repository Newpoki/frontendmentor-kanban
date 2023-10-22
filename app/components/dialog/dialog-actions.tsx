import { twMerge } from 'tailwind-merge';

type Props = React.HTMLAttributes<HTMLDivElement>;

export const DialogActions = ({ className, ...others }: Props) => {
    return <div {...others} className={twMerge('flex flex-col gap-4 p-6', className)} />;
};
