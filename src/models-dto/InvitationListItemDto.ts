import { InvitationStatusDto } from './InvitationStatusDto';
export interface InvitationListItemDto {
    id: string;
    displayName: string;
    email: string;
    status: InvitationStatusDto;
    canDelete: boolean;

}