import { Dialog, DialogProps } from '@/app/components/dialog/dialog';
import { DialogTitle } from '@/app/components/dialog/dialog-title';
import { BoardDialogForm } from './board-dialog-form';

type Props = Omit<DialogProps, 'children'>;

export const BoardDialog = (props: Props) => {
    return (
        <Dialog {...props}>
            <DialogTitle>Add New Board</DialogTitle>

            <BoardDialogForm />
        </Dialog>
    );
};
