import axios from 'axios';
import type { Users } from '../shared/models/User.model';

export const getUsers = async () => {
    const users = await axios.get('https://jsonplaceholder.typicode.com/users');
    return users.data;
}
export const createUsers = async (user:Users) => {
     const body={
        name:user.name,
        email:user.email,
        phone:user.phone,
        website:user.website
    }
     await axios.post('https://jsonplaceholder.typicode.com/create',body);
    
}
export const updateUsers = async (user:Users) => {
    const body={
        name:user.name,
        email:user.email,
        phone:user.phone,
        website:user.website
    }
     await axios.post('https://jsonplaceholder.typicode.com/update/$(user.id)',body);
    
}
export const deleteUsers = async (userId:number) => {
     await axios.delete(`https://jsonplaceholder.typicode.com/users/delete/$(userId)`);
    
}