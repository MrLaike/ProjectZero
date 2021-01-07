export interface Product {
    id: number;
    title?: string;
    price?: number;
    image?: string;
    link?: string;
    currency?: string;
    desc?: string;
};

export interface CatalogState{
    products?: Array<Product>;
    product?: Product;
};