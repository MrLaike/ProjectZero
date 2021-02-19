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

export type OrderType = {
    fullName: string;
    email?: string;
    phone: string;
    address?: string;
    totalPrice: number;
}

export type CartType = {
    id: number,
    quantity: number,
}