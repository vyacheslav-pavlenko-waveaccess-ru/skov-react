import { UserPermissionDto } from './UserPermissionDto';
export interface ProfileResponseDto {
    id: string;
    displayName: string;
    email: string;
    permission: UserPermissionDto;
}