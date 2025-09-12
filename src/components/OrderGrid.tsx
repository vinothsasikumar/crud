import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import { deleteOrder, getOrders } from "../data/order.service";
import { setSelectedOrder, deleteOrder as deleteOrderAction } from '../shared/slicers/OrderSlice';
import type { Order } from "../shared/models/Order.model";

const OrderGrid = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { data: orders = [] } = useQuery({
        queryKey: ['orders'],
        queryFn: getOrders,
        retry: 3,
        refetchInterval: 600000
    });

    const onViewClick = (order: Order) => {
        dispatch(setSelectedOrder(order));
        navigate('/order/view');
    }

    const onDeleteClick = async (order: Order) => {
        if (order.id) {
            await deleteOrder(order.id);
            dispatch(deleteOrderAction(order.id));
        }
    }

    const onUpdateClick = (order: Order) => {
        dispatch(setSelectedOrder(order));
        navigate('/order/update');
    }

    return (
        <>
            <section className="flex flex-col justify-center items-start p-10">
                <Button variant="outlined" onClick={() => navigate('/order/create')}>Create Order</Button>
                <TableContainer component={Paper} className="border border-blue-400 rounded-md p-5 m-5 w-[90%]">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Order Number</TableCell>
                                <TableCell align="center">Customer Name</TableCell>
                                <TableCell align="center">Order Date</TableCell>
                                <TableCell align="center">Total Amount</TableCell>
                                <TableCell align="center">Status</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((order: Order) => (
                                <TableRow key={order.id}>
                                    <TableCell align="center">{order.orderNumber}</TableCell>
                                    <TableCell align="center">{order.customerName}</TableCell>
                                    <TableCell align="center">{order.orderDate}</TableCell>
                                    <TableCell align="center">${order.totalAmount}</TableCell>
                                    <TableCell align="center">{order.status}</TableCell>
                                    <TableCell align="center">
                                        <div className="flex justify-center gap-2">
                                            <Button variant="outlined" onClick={() => onViewClick(order)}>View</Button>
                                            <Button variant="outlined" onClick={() => onUpdateClick(order)}>Update</Button>
                                            <Button variant="outlined" color="error" onClick={() => onDeleteClick(order)}>Delete</Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </section>
        </>
    );
}

export default OrderGrid;