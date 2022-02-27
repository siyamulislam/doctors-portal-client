import React from 'react';

import treatment from '../../../../images/treatment.png'
import './ServiceDetails.css'

const ServiceDetails = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div className='row ServiceDetailsContainer' >
                <div className='col-md-5'><img src={treatment} alt="" width='440px' height='520px' className='fluid' /></div>
                <div className='col-md-5  mt-5 text-left pr-5'>
                    <h2>Exceptional Dental  <br />
                        Care, on Your Terms</h2>
                    <p className='text-secondary'>It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its
                        layout. The point of using Lorem Ipsumis that it has
                        a more-or-less normal distribution of letters,as opposed
                        to using ‘Content here, content here’, making it look like
                        readable English. Many desktop publishing packages
                        and web page </p>
                        <button className='btn btn-primary'>Learn More</button>
                </div>
                <div className='offset-md-2'></div>

            </div>
        </div>

    );
};

export default ServiceDetails;