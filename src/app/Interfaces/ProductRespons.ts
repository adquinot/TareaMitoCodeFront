export interface ProR {
    success: boolean;
    result:  Result;
}

export interface Result {
    productId:      number;
    productName:    string;
    categoryId:     number;
    productPrice:   number;
    productEnabled: boolean;
}