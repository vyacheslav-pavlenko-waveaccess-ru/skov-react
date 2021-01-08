import { SortOrderDto } from './SortOrderDto';
export interface UsersFilterRequestDto {
    limit: number;
    offset: number;
    sortColumn: string;
    sortOrder: SortOrderDto;
    keywords: string;
}
