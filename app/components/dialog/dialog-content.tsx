import { twMerge } from 'tailwind-merge';

type Props = React.HTMLAttributes<HTMLDivElement>;

export const DialogContent = ({ className, ...others }: Props) => {
    return <div {...others} className={twMerge('overflow-y-auto', className)} />;
};
