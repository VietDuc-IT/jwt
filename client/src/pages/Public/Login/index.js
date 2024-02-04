import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Form, Container } from 'react-bootstrap';
import { useState } from 'react';
import { loginUser } from '~/redux/services/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Login() {
    const [validated, setValidated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleValidated = (event) => {
        // Prevent the default form submission behavior
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        //Set the form validation state to true
        setValidated(true);
    };

    const handleSubmit = (e) => {
        handleValidated(e);
        e.preventDefault();
        const newUser = {
            username: username,
            password: password,
        };
        loginUser(newUser, dispatch, navigate);
    };

    return (
        <div className={cx('wrapper')}>
            <Container className={cx('auth')}>
                <div style={{ width: '100%' }}>
                    <h3 className={cx('title')}>Login</h3>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter username"
                                className={cx('form-control')}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid" className={cx('form-text')}>
                                Please provide a valid Username.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Password"
                                className={cx('form-control')}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid" className={cx('form-text')}>
                                Please provide a valid Password.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button primary>Login</Button>
                    </Form>
                    <div className={cx('login-social-list')}>
                        <div>
                            <h3>Login with social another</h3>
                            <Button dark leftIcon={<FontAwesomeIcon icon={faGoogle} />}>
                                Google
                            </Button>
                            <Button dark leftIcon={<FontAwesomeIcon icon={faFacebook} />}>
                                Facebook
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
            <div className={cx('bg-right')}></div>
        </div>
    );
}

export default Login;
