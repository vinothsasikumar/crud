import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";

import { deleteUser, getUsers } from "../data/http.service";
import { setUserData } from '../shared/slicers/UserSlice';
import type { Users } from "../shared/models/User.model";
import { useQuery } from "@tanstack/react-query";

const Grid = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const [usersData, setUsersData] = useState<Users[]>([]);

    const { data } = useQuery({
        queryKey: ['users'],
        queryFn: getUsers,
        retry: 3,
        refetchInterval: 600000
    });

    // useEffect(() => {
    //     getUsers().then(data => setUsersData(data));
    // }, [])

    const onViewClick = (user: Users) => {
        dispatch(setUserData(user));
        navigate('/view');
    }

    const onDeleteClick = async (user: Users) => {
        await deleteUser(user.id);
    }

    const onUpdateClick = (user: Users) => {
        dispatch(setUserData(user));
        navigate('/update');
    }

    return (
        <>
            <section className="flex flex-col justify-center items-start p-10">
                <Button variant="outlined" onClick={() => navigate('/create')}>Create User</Button>
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
                                data && data.map((userData: Users, index: number) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell align="center">{userData.name}</TableCell>
                                            <TableCell align="center">{userData.email}</TableCell>
                                            <TableCell align="center">{userData.phone}</TableCell>
                                            <TableCell align="center">{userData.website}</TableCell>
                                            <TableCell align="center" className="flex flex-row justify-center items-center gap-5">
                                                <Button variant="outlined" onClick={() => onViewClick(userData)}>View</Button>
                                                <Button variant="outlined" onClick={() => onUpdateClick(userData)}>Update</Button>
                                                <Button variant="outlined" onClick={() => onDeleteClick(userData)}>Delete</Button>
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