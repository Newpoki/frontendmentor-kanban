'use client';

import { Backdrop } from '../backdrop';

export type DialogProps = {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
};

export const Dialog = ({ isOpen, onClose, children }: DialogProps) => {
    return (
        <Backdrop
            className="flex items-center justify-center"
            onClose={onClose}
            isDisplayed={isOpen}
        >
            <div className="flex flex-col gap-6 rounded-md bg-white p-6">{isOpen && children}</div>
        </Backdrop>
    );
};
