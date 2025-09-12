import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Order } from '../models/Order.model';

const defaultValue: Order = {
    orderNumber: '',
    customerName: '',
    orderDate: '',
    totalAmount: 0,
    status: 'pending',
    items: []
};

const orderSlice = createSlice({
    name: 'Orders',
    initialState: {
        selectedOrder: defaultValue,
        orderList: [] as Order[]
    },
    reducers: {
        setSelectedOrder: (state, action: PayloadAction<Order>) => {
            state.selectedOrder = action.payload;
        },
        setOrderList: (state, action: PayloadAction<Order[]>) => {
            state.orderList = action.payload;
        },
        addOrder: (state, action: PayloadAction<Order>) => {
            state.orderList.push(action.payload);
        },
        updateOrder: (state, action: PayloadAction<Order>) => {
            const index = state.orderList.findIndex(order => order.id === action.payload.id);
            if (index !== -1) {
                state.orderList[index] = action.payload;
            }
        },
        deleteOrder: (state, action: PayloadAction<number>) => {
            state.orderList = state.orderList.filter(order => order.id !== action.payload);
            if (state.selectedOrder.id === action.payload) {
                state.selectedOrder = defaultValue;
            }
        },
        clearSelectedOrder: (state) => {
            state.selectedOrder = defaultValue;
        }
    }
});

export const {
    setSelectedOrder,
    setOrderList,
    addOrder,
    updateOrder,
    deleteOrder,
    clearSelectedOrder
} = orderSlice.actions;

export default orderSlice.reducer;