import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '~/components/Button';
import config from '~/config';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSign, faSignIn, faSpinner } from '@fortawesome/free-solid-svg-icons';

import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { logoutUser } from '~/redux/services/auth';
import { createAxios } from '~/hooks/createInstance';
import { logoutSuccess } from '~/redux/slices/authSlice';

const cx = classNames.bind(styles);

function Header() {
    const user = useSelector((state) => state.auth.login.currentUser);
    const accessToken = user?.accessToken;
    const id = user?._id;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Refresh Token
    let axiosJWT = createAxios(user, dispatch, logoutSuccess);

    const handleLogout = () => {
        logoutUser(dispatch, navigate, accessToken, axiosJWT);
    };

    return (
        <Navbar expand="lg" className={cx(`wrapper`)}>
            <Container className={cx(`inner`)}>
                <Navbar.Brand href="#" className={cx('logo')}></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className={cx('nav')}>
                    <Nav>
                        <NavLink to={config.routes.home}>Home</NavLink>
                        <NavLink to={config.routes.property}>Property</NavLink>
                        <NavLink to={config.routes.about}>About</NavLink>
                        <NavLink to={config.routes.contact}>Contact</NavLink>
                    </Nav>
                    <div className={cx('actions')}>
                        {user ? (
                            <>
                                <Button to={config.routes.homeAdmin}>
                                    Hi,<span>{user.username}</span>
                                </Button>
                                <Button primary to={config.routes.home} onClick={handleLogout}>
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button outline to={config.routes.login}>
                                    Login
                                </Button>
                                <Button primary to={config.routes.register}>
                                    Register
                                </Button>
                            </>
                        )}
                        <Button dark>Post news</Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
