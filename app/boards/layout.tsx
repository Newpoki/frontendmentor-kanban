import LogoKanban from '@/public/assets/logo-kanban.svg';
import VerticalDots from '@/public/assets/vertical-dots.svg';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authConfig } from '../api/auth/[...nextauth]/route';

type Props = {
    children: React.ReactNode;
};

const routeProtection = async () => {
    const session = await getServerSession(authConfig);

    if (session == null) {
        return redirect('/');
    }
};

export default async function BoardsLayout({ children }: Props) {
    await routeProtection();

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
