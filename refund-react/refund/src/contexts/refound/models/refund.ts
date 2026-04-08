import type { Receipt } from "../../receipt/models/receipt";

export interface Refund {
    id: string;
    title: string;
    category: "food" | "hosting" | "transport" | "services" | "other";
    value: number;
    receipt: Receipt;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
}
