import LogoKanban from '@/public/assets/logo-kanban.svg';
import VerticalDots from '@/public/assets/vertical-dots.svg';

export const Header = () => {
    return (
        <header className="flex justify-between bg-white px-4 py-5">
            <LogoKanban className="w-6" />
            <VerticalDots className="w-1 text-grey500" />
        </header>
    );
};
