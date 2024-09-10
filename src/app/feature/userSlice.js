import { createSlice } from "@reduxjs/toolkit";
import userList from '../../data/users';

const userSlice = createSlice({
    name: 'user',
    initialState: userList,
    reducers: {

    }

})

export default userSlice.reducer;