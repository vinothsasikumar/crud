export interface Order {
    id?: number;
    orderNumber: string;
    customerName: string;
    orderDate: string;
    totalAmount: number;
    status: 'pending' | 'completed' | 'cancelled';
    items: OrderItem[];
}

export interface OrderItem {
    id?: number;
    productName: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
}