import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Form, Container } from 'react-bootstrap';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Register() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div className={cx('wrapper')}>
            <Container className={cx('auth')}>
                <div style={{ width: '100%' }}>
                    <h3 className={cx('title')}>Register</h3>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter name"
                                className={cx('form-control')}
                            />
                            <Form.Control.Feedback type="invalid" className={cx('form-text')}>
                                Please provide a valid Name.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Enter email"
                                className={cx('form-control')}
                            />
                            <Form.Control.Feedback type="invalid" className={cx('form-text')}>
                                Please provide a valid Email.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Password"
                                className={cx('form-control')}
                            />
                            <Form.Control.Feedback type="invalid" className={cx('form-text')}>
                                Please provide a valid Password.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Confirm Password"
                                className={cx('form-control')}
                            />
                            <Form.Control.Feedback type="invalid" className={cx('form-text')}>
                                Please provide a valid Confirm Password.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button primary>Register</Button>
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

export default Register;
