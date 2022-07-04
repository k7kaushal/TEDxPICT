import React from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from './components/2016  (1).jpg';
import image2 from './components/2016  (2).jpg';
import image3 from './components/2016  (3).jpg';
import image4 from './components/2016  (4).jpg';
import image5 from './components/2016 (1).jpg';
import image6 from './components/2016 (2).jpg';
import image7 from './components/Img7.jpg';
import styles from './StillHere.module.css';

const Slider = () => {
  return (
    <Carousel style={{interval:false}} className={styles.Carousel}>
      <Carousel.Item style={{interval:false}}>
        <img
          className="d-block w-100"
          src={image5}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item style={{interval:false}}>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item style={{interval:false}}>
        <img
          className="d-block w-100"
          src={image7}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item style={{interval:false}}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item style={{interval:false}}>
        <img
          className="d-block w-100"
          src={image1}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item style={{interval:false}}>
        <img
          className="d-block w-100"
          src={image6}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item style={{interval:false}}>
        <img
          className="d-block w-100"
          src={image4}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider;