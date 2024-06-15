import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_ROUTE, CHECK_BOOKING_ROUTE } from '../Constants/AppRoutes';
import { Button, Container } from 'react-bootstrap';
import moment from 'moment';

export function BookingForms() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
    });

    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        const { date, time } = formData;
        const bookingDateTime = moment(`${date} ${time}`, 'YYYY-MM-DD HH:mm');
        const now = moment();

        if (!bookingDateTime.isValid() || bookingDateTime.isBefore(now) || bookingDateTime.diff(now, 'hours') < 1) {
            setErrorMessage('Invalid date or time. Booking must be at least one hour in the future.');
            return;
        }

        try {
            const response = await fetch('http://localhost:6005/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
                setFormData({
                    name: '',
                    phone: '',
                    date: '',
                    time: '',
                });
                setShowAlert(true);
            } else {
                setErrorMessage(data.msg || 'Failed to submit form');
            }
        } catch (error) {
            setErrorMessage('Error submitting form: ' + error.message);
        }
    };

    useEffect(() => {
        if (showAlert) {
            window.alert('Booking has been confirmed!');
            navigate(CHECK_BOOKING_ROUTE);
        }
    }, [showAlert]);

    return (
        <Container>
            <h4 style={{ backgroundColor: "beige", textAlign: "center", padding: "20px" }}>Enter booking details</h4>
            <Container style={{ backgroundColor: "lightblue", padding: "100px", borderRadius: "10px" }}>
                <form onSubmit={handleSubmit}>
                    <label style={{ display: 'block', marginBottom: '10px' }}>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{ marginLeft: '10px' }}
                        />
                    </label>
                    <br />
                    <label style={{ display: 'block', marginBottom: '10px' }}>
                        Phone:
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            style={{ marginLeft: '10px' }}
                        />
                        <small style={{ marginLeft: '10px' }}>Format: 123-456-7890</small>
                    </label>
                    <br />
                    <label style={{ display: 'block', marginBottom: '10px' }}>
                        Date:
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            style={{ marginLeft: '10px' }}
                        />
                    </label>
                    <br />
                    <label style={{ display: 'block', marginBottom: '10px' }}>
                        Time:
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                            style={{ marginLeft: '10px' }}
                        />
                    </label>
                    <br />
                    <Button type="submit" variant="primary">Submit</Button>
                </form>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                {showAlert && <Link to={BASE_ROUTE}>Redirect to homepage</Link>}
            </Container>
        </Container>
    );
}
