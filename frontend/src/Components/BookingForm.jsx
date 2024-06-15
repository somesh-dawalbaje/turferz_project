import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { DATE_BOOKING_ROUTE } from "../Constants/AppRoutes";

export function BookingForm() {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Row className="w-100">
        <Col xs={12} className="d-flex justify-content-center mb-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../images/1.jpg" />
            <Card.Body>
              <Card.Title>Discounts ₹1300</Card.Title>
              <Card.Text>
                Turfen Up  
                Rs. 1300/hr 10am-4pm 
                Get ready to have the experience of playing like professionals on Turf which will make you forget playing on ordinary grass.
                You can play box-cricket, football, desi games like 7-stones (Pitthu), Kho-Kho, or do yoga, aerobics, dance anything fun and healthy.
                Whatever you do we promise you a comfortable even surface on which you can slide and dive. 
              </Card.Text>
              <Link to={DATE_BOOKING_ROUTE}>
                <Button variant="primary">Select</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} className="d-flex justify-content-center">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../images/1.jpg" />
            <Card.Body>
              <Card.Title>Turf ₹1600</Card.Title>
              <Card.Text>
                Turfen Up  
                Get ready to have the experience of playing like professionals on Turf which will make you forget playing on ordinary grass.
                You can play box-cricket, football, desi games like 7-stones (Pitthu), Kho-Kho, or do yoga, aerobics, dance anything fun and healthy.
                Whatever you do we promise you a comfortable even surface on which you can slide and dive. 
              </Card.Text>
              <Link to={DATE_BOOKING_ROUTE}>
                <Button variant="primary">Select</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

