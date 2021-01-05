import { from, Observable, of, throwError } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { switchMap } from 'rxjs/operators';
import { UserListItemPagingResultDto } from './../models-dto/UserListItemPagingResultDto';
import { UsersFilterRequestDto } from './../models-dto/UsersFilterRequestDto';
import { UserUpdatePermissionRequestDto } from './../models-dto/UserUpdatePermissionRequestDto';
import { JsonDeleteInit, JsonGetInit, JsonPutInit } from './http-constansts';

class UsersApi {
    localUrl = 'v1/users';
    // "summary": "Get all member list"
    getUsers(filter: UsersFilterRequestDto): Observable<UserListItemPagingResultDto> {
        const curUrl = this.localUrl;
        const curInit = { ...JsonGetInit, body: JSON.stringify(filter) };

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

    // "summary": "Get user list to invite by keywords filter"
    getUsersToInvite(filter: UsersFilterRequestDto): Observable<UserListItemPagingResultDto> {
        const curUrl = this.localUrl;
        const curInit = { ...JsonGetInit, body: JSON.stringify(filter) };

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

    // "summary": "Update user permission"
    updateUserPermission(id: string, permission: UserUpdatePermissionRequestDto): Observable<boolean> {
        const curUrl = this.localUrl + '/' + id;
        const curInit = { ...JsonPutInit, body: JSON.stringify(permission) };
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

    // "summary": "Delete user"
    deleteUser(id: string): Observable<boolean> {
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

export const usersApi = new UsersApi();
