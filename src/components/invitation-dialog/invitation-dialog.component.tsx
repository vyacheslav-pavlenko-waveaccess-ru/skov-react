import React from 'react';
import lStyles from './invitation-dialog.module.css';

interface InvitationDialogProps {
    handleModal: () => void;
}

export function InvitationDialogComponent({ handleModal }: InvitationDialogProps): JSX.Element {
    const handleClose = () => handleModal();

    return (
        <div className={`${lStyles.modal}`}>
            <div className={`${lStyles.content}`}>
                <div>Modal component</div>
                <hr />
                <button onClick={handleClose}>Close</button>
            </div>
        </div>
    );
}
