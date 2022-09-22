import React from 'react';
import './serviceDetails.css'


const ServiceDetails = (props) => {
     const {description, img, name} = props.service;
     return (
          <div className='service'>
          <img src={img} alt="" />
               <h1>{name}</h1>
               <p >{description}</p>
          </div>
     );
};

export default ServiceDetails;