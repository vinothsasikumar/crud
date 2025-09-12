import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";

import { deleteUsers, getUsers } from "../data/http.service";
import { setUserData } from '../shared/slicers/UserSlice';
import type { Users } from "../shared/models/User.model";

const Grid = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [usersData, setUsersData] = useState<Users[]>([]);

    useEffect(() => {
        getUsers().then(data => setUsersData(data));
    }, [])

    const onViewClick = (user: Users) => {
        dispatch(setUserData(user));
        navigate('/view');
    }
    const onDeleteClick=async(user:Users)=>{
           await deleteUsers(user.id)
    }
     const onUpdateClick=(user:Users)=>{

    }


    return (
        <>
         <Button variant="outlined" onClick={()=>navigate('/create')}>Create user</Button>
            <section className="flex justify-center items-center">
                <TableContainer component={Paper} className="border border-blue-400 rounded-md p-5 m-5 w-[90%]">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">Phone</TableCell>
                                <TableCell align="center">Website</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                usersData.map((data, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell align="center">{data.name}</TableCell>
                                            <TableCell align="center">{data.email}</TableCell>
                                            <TableCell align="center">{data.phone}</TableCell>
                                            <TableCell align="center">{data.website}</TableCell>
                                            <TableCell align="center" className="flex flex-row justify-center items-center gap-5">
                                                <Button variant="outlined" onClick={() => onViewClick(data)}>View</Button>
                                                <Button variant="outlined" onClick={() => onUpdateClick(data)}>Update</Button>
                                                <Button variant="outlined" onClick={() => onDeleteClick(data)}>Delete</Button>
                                            </TableCell>
                                        </TableRow>)
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </section>
        </>
    )
};

export default Grid;