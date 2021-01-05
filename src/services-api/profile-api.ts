import { from, Observable, throwError } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { switchMap } from 'rxjs/operators';
import { ProfileResponseDto } from './../models-dto/ProfileResponseDto';
import { JsonGetInit } from './http-constansts';

class ProfileApi {
    localUrl = 'v1/profile';

    // "summary": "Get profile of current user",
    getProfileCurrentUser(): Observable<ProfileResponseDto> {
        const curUrl = this.localUrl;
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
}

export const profileApi = new ProfileApi();
