import { createSlice } from "@reduxjs/toolkit";
import userList from '../../data/users';

const userSlice = createSlice({
    name: 'user',
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        updateUser: (state, action) => {

        }
    }

})
export const { addUser, updateUser } = userSlice.actions;
export default userSlice.reducer;