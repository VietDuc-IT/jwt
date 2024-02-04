import { faL } from '@fortawesome/free-solid-svg-icons';
import { createSlice } from '@reduxjs/toolkit';

const userSilce = createSlice({
    name: 'user',
    initialState: {
        users: {
            allUsers: null,
            isFetching: false,
            error: false,
        },
        msg: '',
    },
    reducers: {
        getUsersStart: (state) => {
            state.users.isFetching = true;
        },
        getUsersSuccess: (state, action) => {
            state.users.isFetching = false;
            state.users.allUsers = action.payload;
        },
        getusersFailed: (state) => {
            state.users.isFetching = false;
            state.users.error = true;
        },
        deleteUserStart: (state) => {
            state.users.isFetching = true;
        },
        deleteUserSuccess: (state, action) => {
            state.users.isFetching = false;
            state.msg = action.payload;
        },
        deleteUserFailed: (state, action) => {
            state.users.isFetching = false;
            state.users.error = true;
            state.msg = action.payload;
        },
    },
});

export const { getUsersStart, getUsersSuccess, getusersFailed, deleteUserSuccess, deleteUserStart, deleteUserFailed } =
    userSilce.actions;
export default userSilce.reducer;
