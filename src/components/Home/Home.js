import React, { useEffect, useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import ServiceDetails from "./../serviceDetails/ServiceDetails";
import banner1 from '../../../src/images/banner/banner1.jpg';
import banner2 from '../../../src/images/banner/banner2.jpg';
import banner3 from '../../../src/images/banner/banner3.jpg';
import services from '../../../src/images/services/services.jpg';
import './Home.css'

const Home = () => {
     const[serviceDetails , setServiceDetails] = useState([]);
     useEffect(()=>{
          fetch('./serviceData.json')
          .then(res=> res.json())
          .then(data => setServiceDetails(data))
     },[]);
     return (
          <div>


                    <div className="home-banner">
                    <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={banner1}
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
                        src={banner2}
                        alt="Second slide"
                      />
              
                      <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                      />
              
                      <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                    </div>
                    <div className="services-header">
                <h2>Everyone deserves our best service</h2>
                           <img src={services} alt=""/>

              </div>
                    <div>
                        <h2 className="service-types">Service types</h2>
                         <Row xs={2} md={3} className="g-4">
                         {
                             //    all  services and details
                             serviceDetails.map(service => <ServiceDetails
                                 key={service.key}
                                 service={service}></ServiceDetails>)
                         }
                         </Row>
                    </div>
          </div>
     );
};

export default Home;