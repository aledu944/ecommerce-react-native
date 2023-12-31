// Generated by https://quicktype.io

export interface IProductsResponse {
    data: IProductData[];
}

export interface IProductData {
    id:          string;
    name:        string;
    slug:        string;
    stock:       number;
    price:       number;
    description: string;
    category:    Category;
    images:      Image[];
}

export interface Category {
    id:          string;
    name:        string;
    slug:        string;
    image:       string;
    description: string;
}

export interface Image {
    id:  number;
    url: string;
}
