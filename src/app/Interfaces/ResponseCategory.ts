export interface ICategory {
  collection: Collection[];
  totalPages: number;
}

 export interface Collection {
  categoryId?:          number;
  categoryName?:        string;
  categoryDescription?: string;
}
