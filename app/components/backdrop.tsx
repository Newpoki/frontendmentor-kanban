'use client';

import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';

type BackdropProps = React.HTMLAttributes<HTMLDivElement> & {
    isDisplayed: boolean;
    onClose: () => void;
};

export const BackdropComponent = ({
    children,
    className,
    isDisplayed,
    onClose,
    ...others
}: BackdropProps) => {
    const rootRef = useRef<HTMLDivElement>(null);

    // handling a local state on top of the isDisplayed prop to
    // be able to have nice open / close animation
    const [shouldDisplay, setShouldDisplay] = useState(isDisplayed);

    const handleClick = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            // We don't want to close the dialog if user click one of backdrop children or their own children
            if (event.currentTarget !== event.target) {
                return;
            }

            setShouldDisplay(false);

            setTimeout(() => {
                onClose();
                // 150 is the opacity transition duration here
            }, 150);
        },
        [onClose]
    );

    // Keep `shouldDisplay` and sync with `isDisplayed`
    useEffect(() => {
        setShouldDisplay(isDisplayed);
    }, [isDisplayed]);

    // We don't want user to be able to scroll behind the dialog
    useEffect(() => {
        isDisplayed
            ? (document.body.style.overflowY = 'hidden')
            : (document.body.style.overflowY = 'auto');
    }, [isDisplayed]);

    return (
        <div
            {...others}
            ref={rootRef}
            className={twMerge(
                'fixed left-[-100dvw] opacity-0 transition-opacity',
                isDisplayed && 'bottom-0 left-0 right-0 top-0',
                shouldDisplay && ' bg-black/50 opacity-100 ',
                className
            )}
            onClick={handleClick}
        >
            {children}
        </div>
    );
};

export const Backdrop = memo<BackdropProps>((props) => {
    const [isRenderedOnClient, setIsRenderedOnClient] = useState(false);

    useEffect(() => {
        setIsRenderedOnClient(true);
    }, []);

    if (!isRenderedOnClient) {
        return null;
    }

    return createPortal(<BackdropComponent {...props} />, document.body);
});
