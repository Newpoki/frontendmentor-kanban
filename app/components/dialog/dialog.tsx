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
            <div className="flex max-h-[calc(100dvh-32px)] w-[calc(100dvw-32px)] max-w-[480px] flex-col rounded-md bg-white">
                {isOpen && children}
            </div>
        </Backdrop>
    );
};
