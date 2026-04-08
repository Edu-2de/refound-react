export interface Receipt {
    id: string;
    originalFilename: string;
    filename: string;
    extname: string;
    path: string;
    refundId: string | null;
    createdAt: string;
    updatedAt: string;
}
