import { configureStore } from '@reduxjs/toolkit';
import UserSlice from '../shared/slicers/UserSlice';
import OrderSlice from '../shared/slicers/OrderSlice';

const store = configureStore({
    reducer: {
        User: UserSlice,
        Order: OrderSlice
    }
});

export default store;