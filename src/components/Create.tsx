import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

import type { Users } from "../shared/models/User.model";

const Create = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Users>();

  const onSubmit = (data: Users) => {
    console.log("Form Data:", data);
    reset(); // reset after submit
  };

  return (
    <section className="flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TableContainer component={Paper} className="border border-blue-400 rounded-md p-5 m-5 w-[60%]">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">
                  <TextField
                    className="w-full"
                    label="Name"
                    variant="outlined"
                    {...register("name", { required: "Name is required" })}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell align="right">
                  <TextField
                    className="w-full"
                    label="Email"
                    variant="outlined"
                    {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
                    })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Phone</TableCell>
                <TableCell align="right">
                  <TextField
                    className="w-full"
                    label="Phone"
                    variant="outlined"
                    {...register("phone", { required: "Phone number is required" })}
                    error={!!errors.phone}
                    helperText={errors.phone?.message}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Website</TableCell>
                <TableCell align="right">
                  <TextField
                    className="w-full"
                    label="Website"
                    variant="outlined"
                    {...register("website")}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={2} align="right">
                  <Button type="submit" variant="outlined">Create User</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </form>
    </section>
  );
};

export default Create;
