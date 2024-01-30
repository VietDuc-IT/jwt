import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import Button from '~/components/Button';
import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSign, faSignIn, faSpinner } from '@fortawesome/free-solid-svg-icons';

import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

const cx = classNames.bind(styles);

function Header() {
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
                        <Button outline to={config.routes.login}>
                            Login
                        </Button>
                        <Button primary to={config.routes.register}>
                            Register
                        </Button>
                        <Button dark>Post news</Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;

{
    /* <header className={cx(`wrapper`)}>
            <div className={cx(`inner`)}>
                <div className={cx('logo')}></div>
                <div className={cx('nav')}>
                    <ul>
                        <li>
                            <NavLink to={config.routes.home}>Home</NavLink>
                            <NavLink to={config.routes.property}>Property</NavLink>
                            <NavLink to={config.routes.about}>About</NavLink>
                            <NavLink to={config.routes.contact}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={cx('actions')}>
                    <Button outline>Đăng nhập</Button>
                    <Button primary>Đăng ký</Button>
                    <Button dark>Đăng tin</Button>
                    <Button rounded className={cx('custom-btn')} leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                        btn
                    </Button>
                </div>
            </div>
        </header> */
}
