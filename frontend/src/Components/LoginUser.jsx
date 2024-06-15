import { Col, Row, Button, Form, Container } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BOOKINGFORM_ROUTE } from "../Constants/AppRoutes";

export function LoginUser() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleFieldChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:6005/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                window.alert('logged in');
                navigate(BOOKINGFORM_ROUTE);
            } else {
                window.alert('wrong credentials');
                console.error("Login failed");

            }
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    return (
        <Container>
            <h4 style={{ backgroundColor: "beige", textAlign: "center", padding: "20px" }}>Login now</h4>

            <Container style={{ backgroundColor: "lightblue", padding: "100px", borderRadius: "10px" }}>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleFieldChange} required />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" onChange={handleFieldChange} required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Button type="submit" variant="primary">Login</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </Container>
    );
}
