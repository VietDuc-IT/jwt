import axios from '~/utils/httpRequest';

import {
    deleteUserFailed,
    deleteUserStart,
    deleteUserSuccess,
    getUsersStart,
    getUsersSuccess,
    getusersFailed,
} from '../slices/userSlice';

export const getAllUser = async (accessToken, dispatch, axiosJWT) => {
    dispatch(getUsersStart());
    try {
        const res = await axiosJWT.get(`/user`, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(getUsersSuccess(res.data));
    } catch (err) {
        dispatch(getusersFailed());
    }
};

export const deleteUser = async (accessToken, dispatch, id, axiosJWT) => {
    dispatch(deleteUserStart());
    try {
        const res = await axiosJWT.delete(`/user/` + id, {
            headers: { token: `bearer ${accessToken}` },
        });
        dispatch(deleteUserSuccess(res.data));
    } catch (err) {
        dispatch(deleteUserFailed(err.response.data));
    }
};
