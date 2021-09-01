export interface VerCategoria {
    success: boolean;
    result:  Result;
}

export interface Result {
    categoryId?:          number;
    categoryName?:        string;
    categoryDescription?: string;
}
