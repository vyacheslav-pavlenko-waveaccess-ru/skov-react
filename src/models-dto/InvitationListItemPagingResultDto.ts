import { InvitationListItemDto } from './InvitationListItemDto';

export interface InvitationListItemPagingResultDto {
    items: InvitationListItemDto[];
    total: number;
}