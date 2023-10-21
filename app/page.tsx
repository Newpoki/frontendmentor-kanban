import LogoKanbanFull from '@/public/assets/logo-kanban-full.svg';
import { SigninGoogleButton } from './signin-google-button';

export default function Home() {
    return (
        <main className="flex flex-1 flex-col p-4 tablet:p-10">
            <div className="flex items-center tablet:flex-col tablet:items-center">
                <LogoKanbanFull className="w-[152px] tablet:w-[252px]" />
            </div>

            <section className="m-auto flex flex-col gap-6 rounded-md bg-white p-6 shadow tablet:gap-12 tablet:p-12">
                <div className="flex flex-col gap-6">
                    <h1 className="text-center text-heading-l tablet:text-heading-xl">
                        Simplify and Organize work.
                    </h1>

                    <ol className="flex flex-col text-body-l tablet:gap-4 tablet:text-heading-m tablet:font-[500]">
                        <li>
                            <b>1.</b>
                            <span>Visualize Tasks: Create boards for clarity</span>
                        </li>
                        <li>
                            <b>2.</b>
                            <span>Prioritize Easily: Drag and drop tasks</span>
                        </li>
                        <li>
                            <b>3.</b>
                            <span>Collaborate: Invite your team to work together</span>
                        </li>
                        <li>
                            <b>4.</b>
                            <span>Track Progress: Monitor task status</span>
                        </li>
                        <li>
                            <b>5.</b>
                            <span>Customize Workflow: Adapt it to your needs</span>
                        </li>
                        <li>
                            <b>6.</b>
                            <span>Access Anywhere: Cloud-based and accessible</span>
                        </li>
                    </ol>

                    <p className="text-center">
                        <b>Sign in&nbsp;</b>
                        and supercharge your productivity today!
                    </p>
                </div>

                <SigninGoogleButton />
            </section>
        </main>
    );
}
