export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}
export interface CartItem {
    id: number;
    name: string;
    price: number;
    amount: number;
}
export const products = [
    {
        id: 1,
        name: 'iPhone 13 mini',
        price: 25000,
        description: ''
    },
    {
        id: 2,
        name: 'iPhone 13',
        price: 35000,
        description: ''
    },
    {
        id: 3,
        name: 'iPhone 13 pro',
        price: 45000,
        description: ''
    },
    {
        id: 4,
        name: 'iPhone 13 pro max',
        price: 55000,
        description: ''
    },
]