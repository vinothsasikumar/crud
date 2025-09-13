import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import { clearSelectedOrder } from "../shared/slicers/OrderSlice";
import type { Order } from "../shared/models/Order.model";

const OrderView = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const order = useSelector((state: any) => state.Order.selectedOrder as Order);

    useEffect(() => {
        if (!order?.id) {
            navigate('/orders');
        }
        return () => {
            dispatch(clearSelectedOrder());
        }
    }, [order, navigate, dispatch]);

    return (
        <div className="p-10">
            <Paper className="p-6">
                <Typography variant="h4" gutterBottom>Order Details</Typography>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <Typography variant="subtitle1" color="text.secondary">Order Number</Typography>
                        <Typography variant="body1">{order.orderNumber}</Typography>
                    </div>
                    
                    <div>
                        <Typography variant="subtitle1" color="text.secondary">Customer Name</Typography>
                        <Typography variant="body1">{order.customerName}</Typography>
                    </div>
                    
                    <div>
                        <Typography variant="subtitle1" color="text.secondary">Order Date</Typography>
                        <Typography variant="body1">{order.orderDate}</Typography>
                    </div>
                    
                    <div>
                        <Typography variant="subtitle1" color="text.secondary">Status</Typography>
                        <Typography variant="body1" className="capitalize">{order.status}</Typography>
                    </div>
                </div>

                <Typography variant="h6" gutterBottom className="mt-6">Order Items</Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Product Name</TableCell>
                                <TableCell align="right">Quantity</TableCell>
                                <TableCell align="right">Unit Price</TableCell>
                                <TableCell align="right">Total Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {order.items.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell>{item.productName}</TableCell>
                                    <TableCell align="right">{item.quantity}</TableCell>
                                    <TableCell align="right">${item.unitPrice}</TableCell>
                                    <TableCell align="right">${item.totalPrice}</TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell colSpan={3} align="right">
                                    <Typography variant="subtitle1">Total Amount:</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="subtitle1">${order.totalAmount}</Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <div className="mt-6 flex gap-4">
                    <Button variant="contained" onClick={() => navigate('/orders')}>
                        Back to Orders
                    </Button>
                    <Button variant="outlined" onClick={() => navigate(`/order/update`)}>
                        Edit Order
                    </Button>
                </div>
            </Paper>
        </div>
    );
}

export default OrderView;