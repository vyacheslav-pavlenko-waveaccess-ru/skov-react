import React, { useEffect } from 'react';

interface MembersProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setIsMembersPage: any;
}

export function MembersComponent({ setIsMembersPage }: MembersProps): JSX.Element {
    useEffect(() => {
        setIsMembersPage(true);
        return () => {
            setIsMembersPage(false);
        };
    }, []);
    return <div>Members component</div>;
}
