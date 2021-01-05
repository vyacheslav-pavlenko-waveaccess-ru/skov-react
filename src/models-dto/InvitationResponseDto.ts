import { UserPermissionDto } from './UserPermissionDto';
export interface InvitationResponseDto {
    id: string;
    email: string;
    permission: UserPermissionDto;
}