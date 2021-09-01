export interface productos {
    collection: Collection[];
    totalPages: number;
}

export interface Collection {
    productId:   number;
    productName: string;
    category:    string;
    unitPrice:   number;
}