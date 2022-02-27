import React from 'react';
import './ServiceCard.css'

const ServiceCard = ({ service }) => {
    return (
        <div className='col-md-4 p-1'>
            <div className='  card-Container ' >

                <img src={service.img} alt="" />

                <h5 className='p-3' style={{color:'#565E69'}}>{service.title}</h5>
                <p className='text-secondary'>{service.description}</p>

            </div>
        </div>
    );
};

export default ServiceCard;