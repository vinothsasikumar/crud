import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, TextField, FormControl, InputLabel, Select, MenuItem, IconButton } from "@mui/material";
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';

import { createOrder, updateOrder } from "../data/order.service";
import { clearSelectedOrder } from "../shared/slicers/OrderSlice";
import type { Order, OrderItem } from "../shared/models/Order.model";

const CreateUpdate = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selectedOrder = useSelector((state: any) => state.Order.selectedOrder);
    const isUpdate = !!selectedOrder?.id;

    const [order, setOrder] = useState<Order>({
        orderNumber: '',
        customerName: '',
        orderDate: new Date().toISOString().split('T')[0],
        totalAmount: 0,
        status: 'pending',
        items: []
    });

    useEffect(() => {
        if (isUpdate) {
            setOrder(selectedOrder);
        }
        return () => {
            dispatch(clearSelectedOrder());
        }
    }, [selectedOrder, dispatch, isUpdate]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isUpdate) {
            await updateOrder(order);
        } else {
            await createOrder(order);
        }
        navigate('/orders');
    }

    const addItem = () => {
        setOrder(prev => ({
            ...prev,
            items: [...prev.items, {
                productName: '',
                quantity: 1,
                unitPrice: 0,
                totalPrice: 0
            }]
        }));
    }

    const removeItem = (index: number) => {
        setOrder(prev => ({
            ...prev,
            items: prev.items.filter((_, i) => i !== index)
        }));
        calculateTotal();
    }

    const updateItem = (index: number, field: keyof OrderItem, value: string | number) => {
        setOrder(prev => {
            const newItems = [...prev.items];
            newItems[index] = {
                ...newItems[index],
                [field]: value
            };
            if (field === 'quantity' || field === 'unitPrice') {
                newItems[index].totalPrice = newItems[index].quantity * newItems[index].unitPrice;
            }
            return {
                ...prev,
                items: newItems,
                totalAmount: newItems.reduce((sum, item) => sum + item.totalPrice, 0)
            };
        });
    }

    const calculateTotal = () => {
        setOrder(prev => ({
            ...prev,
            totalAmount: prev.items.reduce((sum, item) => sum + item.totalPrice, 0)
        }));
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-10">
            <h2 className="text-2xl font-bold mb-4">{isUpdate ? 'Update Order' : 'Create Order'}</h2>
            
            <TextField
                label="Order Number"
                value={order.orderNumber}
                onChange={e => setOrder(prev => ({ ...prev, orderNumber: e.target.value }))}
                required
            />
            
            <TextField
                label="Customer Name"
                value={order.customerName}
                onChange={e => setOrder(prev => ({ ...prev, customerName: e.target.value }))}
                required
            />
            
            <TextField
                label="Order Date"
                type="date"
                value={order.orderDate}
                onChange={e => setOrder(prev => ({ ...prev, orderDate: e.target.value }))}
                required
            />
            
            <FormControl>
                <InputLabel>Status</InputLabel>
                <Select
                    value={order.status}
                    label="Status"
                    onChange={e => setOrder(prev => ({ ...prev, status: e.target.value as 'pending' | 'completed' | 'cancelled' }))}
                >
                    <MenuItem value="pending">Pending</MenuItem>
                    <MenuItem value="completed">Completed</MenuItem>
                    <MenuItem value="cancelled">Cancelled</MenuItem>
                </Select>
            </FormControl>

            <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">Order Items</h3>
                    <Button variant="outlined" startIcon={<AddIcon />} onClick={addItem}>
                        Add Item
                    </Button>
                </div>

                {order.items.map((item, index) => (
                    <div key={index} className="flex gap-4 items-center mb-4 p-4 border rounded">
                        <TextField
                            label="Product Name"
                            value={item.productName}
                            onChange={e => updateItem(index, 'productName', e.target.value)}
                            required
                        />
                        <TextField
                            label="Quantity"
                            type="number"
                            value={item.quantity}
                            onChange={e => updateItem(index, 'quantity', parseInt(e.target.value))}
                            required
                        />
                        <TextField
                            label="Unit Price"
                            type="number"
                            value={item.unitPrice}
                            onChange={e => updateItem(index, 'unitPrice', parseFloat(e.target.value))}
                            required
                        />
                        <TextField
                            label="Total Price"
                            value={item.totalPrice}
                            disabled
                        />
                        <IconButton color="error" onClick={() => removeItem(index)}>
                            <RemoveIcon />
                        </IconButton>
                    </div>
                ))}
            </div>

            <TextField
                label="Total Amount"
                value={order.totalAmount}
                disabled
            />

            <div className="flex gap-4">
                <Button type="submit" variant="contained" color="primary">
                    {isUpdate ? 'Update Order' : 'Create Order'}
                </Button>
                <Button variant="outlined" onClick={() => navigate('/orders')}>
                    Cancel
                </Button>
            </div>
        </form>
    );
}

export default CreateUpdate;