import LogoKanban from '@/public/assets/logo-kanban.svg';
import VerticalDots from '@/public/assets/vertical-dots.svg';

type Props = {
    children: React.ReactNode;
};

export default function BoardsLayout({ children }: Props) {
    return (
        <div className="flex flex-1 flex-col">
            <header className="flex justify-between bg-white px-4 py-5">
                <LogoKanban className="w-6" />
                <VerticalDots className="w-1 text-grey500" />
            </header>

            <div className="flex flex-1 flex-col px-4 py-6">{children}</div>
        </div>
    );
}
