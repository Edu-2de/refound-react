import type { Receipt } from "../../receipt/models/receipt";
import type { RefundCategory } from "../constants/refund-categories";

export interface Refund {
    id: string;
    title: string;
    category: RefundCategory;
    value: number;
    receipt: Receipt;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
}
