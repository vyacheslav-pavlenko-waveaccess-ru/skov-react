import React, { useState } from 'react';
import { BrowserRouter as Router, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { InvitationDialogComponent } from '../invitation-dialog/invitation-dialog.component';
import { InvitationsComponent } from '../invitations/invitations.component';
import { MembersComponent } from '../members/members.component';

export function MainComponent(): JSX.Element {
    const [isMembersPage, setIsMembersPage] = useState(false);
    const [showModalInvitation, setShowModalInvitation] = useState(false);

    const invitationHandler = () => {
        setShowModalInvitation(true);
    };

    const modalHandler = () => {
        setShowModalInvitation(false);
    };

    return (
        <>
            <div>Main component</div>
            <Router>
                {/* nav tabs */}
                <div style={{ width: '90%', display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ width: '30%', display: 'flex', justifyContent: 'space-around' }}>
                        <NavLink to="/members"> Members</NavLink>
                        <NavLink to="/invitations"> Invitations</NavLink>
                    </div>
                    {isMembersPage && (
                        <button style={{ display: 'inline' }} onClick={() => invitationHandler()}>
                            Button
                        </button>
                    )}
                </div>
                <hr />

                <Switch>
                    <Route exact path="/">
                        <Redirect to="/members" />
                    </Route>
                    <Route path="/members">
                        <MembersComponent setIsMembersPage={setIsMembersPage} />
                    </Route>
                    <Route path="/invitations">
                        <InvitationsComponent />
                    </Route>
                </Switch>
            </Router>
            {/* modal dialog */}
            {showModalInvitation && <InvitationDialogComponent handleModal={modalHandler} />}
        </>
    );
}
