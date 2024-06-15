import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CarouselItem = styled(Carousel.Item)`
  height: 100vh; 
`;

const CarouselImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover; 
`;

function MySlider() {
  return (
    <Carousel>
      <CarouselItem interval={1000}>
        <CarouselImage src="../images/1.jpg" alt="First slide" />
        <Carousel.Caption>
          <Link to="/registeruser">
            <Button variant="primary">Book Now</Button>{' '}
          </Link>
        </Carousel.Caption>
      </CarouselItem>
      <CarouselItem interval={500}>
        <CarouselImage src="../images/2.jpg" alt="Second slide" />
        <Carousel.Caption>
          <Link to="/registeruser">
            <Button variant="primary">Book Now</Button>{' '}
          </Link>
        </Carousel.Caption>
      </CarouselItem>
      <CarouselItem>
        <CarouselImage src="../images/3.jpg" alt="Third slide" />
        <Carousel.Caption>
          <Link to="/registeruser">
            <Button variant="primary">Book Now</Button>{' '}
          </Link>
        </Carousel.Caption>
      </CarouselItem>
    </Carousel>
  );
}

export default MySlider;
