import { useEffect } from 'react';
import './style.css';
import { deleteUser, getAllUser } from '~/redux/services/user';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import config from '~/config';
import { createAxios } from '~/hooks/createInstance';
import { loginSuccess } from '~/redux/slices/authSlice';

const HomePage = () => {
    const user = useSelector((state) => state.auth.login?.currentUser);
    const userList = useSelector((state) => state.users.users?.allUsers);
    const msg = useSelector((state) => state.users?.msg);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Refresh Token
    let axiosJWT = createAxios(user, dispatch, loginSuccess);

    useEffect(() => {
        if (!user) {
            navigate(config.routes.login);
        }
        if (user?.accessToken) {
            getAllUser(user?.accessToken, dispatch, axiosJWT);
        }
    }, []);

    const handleDelete = (id) => {
        deleteUser(user?.accessToken, dispatch, id, axiosJWT);
    };
    return (
        <main className="home-container">
            <div className="home-title">User List</div>
            <div>{`Your role: ${user?.admin ? 'Admin' : 'User'}`}</div>
            <div className="home-userlist">
                {userList?.map((user) => {
                    return (
                        <div className="user-container">
                            <div className="home-user">{user.username}</div>
                            <div className="delete-user" onClick={() => handleDelete(user._id)}>
                                {' '}
                                Delete{' '}
                            </div>
                        </div>
                    );
                })}
            </div>
            {msg}
        </main>
    );
};

export default HomePage;
