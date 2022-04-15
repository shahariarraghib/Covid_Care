import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slide.css'
const Slide = () => {
    return (
        <div id='slid-id'>
           <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100 image-height img-fluid"
      src="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      alt="First slide"
    />
    <Carousel.Caption className='position'>
      <h1 className='fw-bolder display'><span className='bg-info rounded-circle'>W</span>e <span className='text-info'>Provide</span> Total 
         <br /> Healrh Care Soluution</h1>
      <p>High Quality Health Care Services</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 image-height"
      src="https://images.unsplash.com/photo-1603248322878-f0e0ac378588?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      alt="Second slide"
    />

    <Carousel.Caption className='position'>
      <h1 className='fw-bolder display'>Best & Top <span className='text-info'>Doctors</span> <br /> Exist In Our Clinic</h1>
      <p>High Quality Health Care Services</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 image-height"
      src="https://images.unsplash.com/photo-1576765974257-b414b9ea0051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178&q=80"
      alt="Third slide"
    />

    <Carousel.Caption className='position'>
      <h1 className='fw-bolder display'>Committed to Proper <br /> <span className='text-info'>Treatment</span></h1>
      <p>High Quality Health Care Services</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Slide;