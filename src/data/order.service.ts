import axios from 'axios';
import type { Order } from '../shared/models/Order.model';

const API_URL = 'https://jsonplaceholder.typicode.com'; // Replace with your actual API URL

export const getOrders = async () => {
    const orders = await axios.get(`${API_URL}/orders`);
    return orders.data;
}

export const getOrderById = async (orderId: number) => {
    const order = await axios.get(`${API_URL}/orders/${orderId}`);
    return order.data;
}

export const createOrder = async (order: Order) => {
    const body = {
        orderNumber: order.orderNumber,
        customerName: order.customerName,
        orderDate: order.orderDate,
        totalAmount: order.totalAmount,
        status: order.status,
        items: order.items
    };

    await axios.post(`${API_URL}/orders/create`, body);
}

export const updateOrder = async (order: Order) => {
    const body = {
        orderNumber: order.orderNumber,
        customerName: order.customerName,
        orderDate: order.orderDate,
        totalAmount: order.totalAmount,
        status: order.status,
        items: order.items
    };

    await axios.put(`${API_URL}/orders/update/${order.id}`, body);
}

export const deleteOrder = async (orderId: number) => {
    await axios.delete(`${API_URL}/orders/delete/${orderId}`);
}