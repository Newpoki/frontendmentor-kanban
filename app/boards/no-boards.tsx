import { Button } from '../components/button';

export const NoBoards = () => {
    return (
        <section className="flex flex-1 flex-col justify-center gap-6">
            <p className="text-center text-heading-l text-grey500">
                You have no boards. Create a new board to get started
            </p>
            <Button className="self-center" size="medium">
                + Create a board
            </Button>
        </section>
    );
};
