'use client';

import { useCallback, useState } from 'react';
import { Button } from '../components/button';
import { BoardDialog } from './board-dialog/board-dialog';

export const NoBoards = () => {
    const [isBoardDialogOpen, setIsBoardDialogOpen] = useState(false);

    const handleOpenCreateBoardDialog = useCallback(() => {
        setIsBoardDialogOpen(true);
    }, []);

    const handleCloseCreateBoardDialog = useCallback(() => {
        setIsBoardDialogOpen(false);
    }, []);

    return (
        <>
            <section className="flex flex-1 flex-col justify-center gap-6">
                <p className="text-center text-heading-l text-grey500">
                    You have no boards. Create a new board to get started
                </p>
                <Button
                    className="self-center"
                    size="medium"
                    type="button"
                    onClick={handleOpenCreateBoardDialog}
                >
                    + Create a board
                </Button>
            </section>

            <BoardDialog isOpen={isBoardDialogOpen} onClose={handleCloseCreateBoardDialog} />
        </>
    );
};
