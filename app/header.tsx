import LogoKanban from '@/public/assets/logo-kanban.svg';
import VerticalDots from '@/public/assets/vertical-dots.svg';
import { Board } from '@prisma/client';

type Props = {
    boardName?: Board['name'];
};

export const Header = ({ boardName }: Props) => {
    return (
        <header className="flex justify-between bg-white px-4 py-5 ">
            <div className="flex items-center gap-4">
                <LogoKanban className="w-6" />
                {boardName && <h3 className="text-heading-l">{boardName}</h3>}
            </div>
            <VerticalDots className="w-1 text-grey500" />
        </header>
    );
};
