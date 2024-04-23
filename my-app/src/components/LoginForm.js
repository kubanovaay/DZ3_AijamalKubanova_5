import React, { useState } from 'react';
import { Form, Button, Alert, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = ({ login }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!name) {
            newErrors.name = 'Имя обязательно для заполнения';
        } else if (!/^[a-zA-Zа-яА-Я]+$/.test(name)) {
            newErrors.name = 'Имя может содержать только буквы';
        }

        if (!email) {
            newErrors.email = 'Email обязателен для заполнения';
        } else if (!/@/.test(email)) {
            newErrors.email = 'Email должен содержать @';
        }

        return newErrors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            login({ name, email });  // Вызов action с redux-thunk
            window.location.reload();  // Перезагрузка страницы для демонстрации
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <Form onSubmit={handleSubmit}>
                    {Object.keys(errors).length > 0 && (
                        <Alert variant="danger">
                            Пожалуйста, исправьте следующие ошибки:
                            <ul>
                                {Object.keys(errors).map((key) => (
                                    <li key={key}>{errors[key]}</li>
                                ))}
                            </ul>
                        </Alert>
                    )}
                    <Form.Group controlId="name">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введите имя"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            isInvalid={!!errors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.name}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Введите email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                        Войти
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default LoginForm;
