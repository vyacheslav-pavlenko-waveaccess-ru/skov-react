import { UserListItemDto } from './UserListItemDto';
export interface UserListItemPagingResultDto {
    items: UserListItemDto[];
    total: number;
}