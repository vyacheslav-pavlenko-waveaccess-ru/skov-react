import { UserPermissionDto } from './UserPermissionDto';
export interface UserListItemDto {
    id: string;
    displayName: string;
    email: string;
    permission: UserPermissionDto;
    lastActiveDate: string;
    canEdit: boolean;
    canDelelete: boolean;
}
