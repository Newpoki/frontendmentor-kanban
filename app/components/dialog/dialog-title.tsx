import { twMerge } from 'tailwind-merge';

type Props = React.HTMLAttributes<HTMLHeadElement>;

export const DialogTitle = ({ className, ...others }: Props) => {
    return <h2 {...others} className={twMerge('p-6 text-heading-l', className)} />;
};
