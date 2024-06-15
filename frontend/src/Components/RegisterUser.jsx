import { Col, Row, Button, Form, Container } from "react-bootstrap";
import { useState } from "react";
import { saveUser } from "../services/Api";
import { LOGIN_USER_ROUTE } from "../Constants/AppRoutes";
import { useNavigate } from "react-router-dom";

export function RegisterUser() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', phone: '', role: 'user' });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleFieldChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError(null); 
            await saveUser(formData);
            window.alert('registered successfully');
            navigate(LOGIN_USER_ROUTE);
        } catch (error) {
            console.error("Error registering user:", error);
            if (error.response) {
                setError(error.response.data.message || "Registration failed");
            } else {
                setError("An unexpected error occurred. Please try again.");
            }
        }
    };

    return (
        <Container>
            <h4 style={{ backgroundColor: "beige", textAlign: "center", padding: "20px" }}>Register yourself now</h4>

            <Container style={{ backgroundColor: "lightblue", padding: "20px", borderRadius: "10px" }}>
                <Form onSubmit={handleSubmit}>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" name="name" onChange={handleFieldChange} required />
                            </Form.Group>
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
                            <Form.Group className="mb-3">
                                <Form.Label>Phone no</Form.Label>
                                <Form.Control type="number" placeholder="Enter your number" name="phone" onChange={handleFieldChange} required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Role</Form.Label>
                                <Form.Control as="select" name="role" onChange={handleFieldChange} value={formData.role}>
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Button type="submit" variant="primary">Register</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </Container>
    );
}

