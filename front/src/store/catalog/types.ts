export interface Product {
    title: string;
    price: number;
    currency: string;
    desc?: string;
};

export interface CatalogState {
    products?: Array<Product>;
    error: boolean;
};