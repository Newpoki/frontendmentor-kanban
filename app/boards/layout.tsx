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

    return <>{children}</>;
}
