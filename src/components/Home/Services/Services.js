import React from 'react';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import ServiceCard from './ServiceCard/ServiceCard';
import ServiceDetails from './ServiceDetails/ServiceDetails';


const Services = () => {
    const servicesData = [
        {
            img: fluoride,
            title: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',

        },
        {
            img: cavity,
            title: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',

        },
        {
            img: whitening,
            title: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',

        },
    ]
    return (
        <div className='text-center mt-4 mb-4'>
            <h5 className='text-primary'>OUR SERVICES</h5>
            <h2>Services We Provide</h2>
            {/* <img src={cavity} alt="" /> */}
            <section className='row d-flex justify-content-center mt-4 mb-4'>
                <div className='row w-75'>
                    {
                        servicesData.map(service => <ServiceCard key={service.title} service={service} ></ServiceCard>)
                    }
                </div>
            </section>
            
            <section ><ServiceDetails  ></ServiceDetails></section>
        </div>
    );
};

export default Services;