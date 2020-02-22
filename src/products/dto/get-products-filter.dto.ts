import { OrderStatus } from "./order-status.enum";

export class GetProductsFilterDto {
    categoryId: number;
    discount: boolean;
    sort:OrderStatus;
    search: string;
}