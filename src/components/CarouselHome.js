import React from 'react'
import { Carousel } from 'react-bootstrap'

const CarouselHome = () => {
    return (
        <Carousel>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://anokkhi.com/wp-content/uploads/2017/08/Bridal-On-Click-Moment-of-Love-Necklace.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://anokkhi.com/wp-content/uploads/2017/08/Our_Rem-On-click-The-Pristine-Neckpeice-1.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src='http://anokkhi.com/wp-content/uploads/2017/08/Our_Rem-On-click-The-Mystque-bracelet-1.jpg'
      alt="Third slide"
    />

    <Carousel.Caption >
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}

export default CarouselHome
