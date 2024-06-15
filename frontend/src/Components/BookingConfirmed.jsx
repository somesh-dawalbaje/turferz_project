import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { BASE_ROUTE } from '../Constants/AppRoutes';
import { Link } from 'react-router-dom';


export function BookingConfirmed() {
  return (
    <Container>
    <div style={{ margin: '20px auto', maxWidth: '400px' }}>
      <strong>Booking Confirmed:</strong> Your booking has been successfully confirmed.
      <Link to={BASE_ROUTE}> <Button type="submit" variant="primary">Login</Button></Link>
    </div>
    </Container>
  );
}