import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField } from "@mui/material"

const Create = () => {
    return (
        <>
        

            <section className="flex justify-centre items-centre">
                <TableContainer component={Paper} className="border border-blue-400 rounded-md p-5 m-5 w-[60%]">
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableBody>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">
                                    <TextField className="w-full " label="name" variant="outlined" />
                                </TableCell>

                            </TableRow>
                            <TableRow>
                                <TableCell>email</TableCell>
                                <TableCell align="right">
                                    <TextField className="w-full "label="email" variant="outlined" />
                                </TableCell>

                            </TableRow>
                            <TableRow>
                                <TableCell>phone</TableCell>
                                <TableCell align="right">
                                    <TextField className="w-full "label="phone" variant="outlined" />
                                </TableCell>

                            </TableRow>
                            <TableRow>
                                <TableCell>website</TableCell>
                                <TableCell align="right">
                                    <TextField className="w-full "label="website" variant="outlined" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2} align="right">
                                    <Button variant="outlined">Create user</Button>

                                </TableCell>
                            </TableRow>

                        </TableBody>
                        </Table>
                </TableContainer>
                
            </section>
        </>
    )
};
export default Create;