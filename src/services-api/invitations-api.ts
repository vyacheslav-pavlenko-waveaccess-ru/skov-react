import { from, Observable, of, throwError } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { switchMap } from 'rxjs/operators';
import { InvitationResponseDto } from '../models-dto/InvitationResponseDto';
import { InvitationListItemPagingResultDto } from './../models-dto/InvitationListItemPagingResultDto';
import { InvitationRequestDto } from './../models-dto/InvitationRequestDto';
import { UserPermissionDto } from './../models-dto/UserPermissionDto';
import { JsonDeleteInit, JsonGetInit, JsonPostInit } from './http-constansts';

class InvitationsApi {
    localUrl = 'v1/invitations';
    // "summary": "Get all invitations list"
    getInvitaionsList(
        keywords: string,
        limit: number,
        offset: number,
        sortColumn: string,
        sortOrder: number,
    ): Observable<InvitationListItemPagingResultDto> {
        const curParams = new URLSearchParams();
        curParams.append('Keyword', keywords);
        curParams.append('Limit', '' + limit);
        curParams.append('Offset', '' + offset);
        curParams.append('SortColumn', sortColumn);
        curParams.append('SortOrder', '' + sortOrder);

        const curUrl = this.localUrl + '?' + curParams.toString();
        const curInit = { ...JsonGetInit };

        return fromFetch(curUrl, curInit).pipe(
            switchMap((response: Response) => {
                if (response.ok) {
                    return from(response.json());
                } else {
                    return throwError(`http error ${response.status}`);
                }
            }),
        );
    }
    // "summary": "Invite new user by email with permission"
    inviteNewUserByEmailWithPermission(
        email: string,
        permission: UserPermissionDto,
    ): Observable<InvitationResponseDto> {
        const requestBody: InvitationRequestDto = {
            email,
            permission,
        };
        const curUrl = this.localUrl;
        const curInit = { ...JsonPostInit, body: JSON.stringify(requestBody) };
        return fromFetch(curUrl, curInit).pipe(
            switchMap((response: Response) => {
                if (response.ok) {
                    return from(response.json());
                } else {
                    return throwError(`http error ${response.status}`);
                }
            }),
        );
    }
    // "summary": "Delete invitation"
    deleteInvitation(id: string): Observable<boolean> {
        const curUrl = this.localUrl + '/' + id;
        const curInit = { ...JsonDeleteInit };

        return fromFetch(curUrl, curInit).pipe(
            switchMap((response: Response) => {
                if (response.ok) {
                    return of(true);
                } else {
                    return throwError(`http error ${response.status}`);
                }
            }),
        );
    }
}

export const invitationsApi = new InvitationsApi();
