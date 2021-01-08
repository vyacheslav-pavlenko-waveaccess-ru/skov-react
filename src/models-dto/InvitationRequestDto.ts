import { UserPermissionDto } from './UserPermissionDto';
export interface InvitationRequestDto {
    email: string;
    permission: UserPermissionDto;
}
