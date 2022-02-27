import React from 'react';

import treatment from '../../../../images/treatment.png'

const ServiceDetails = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div className='row' style={{ width: '90%', margin:'100px 0px' }}>
                <div className='col-md-4'><img src={treatment} alt="" width='400px' className='fluid' /></div>
                <div className='col-md-8 mt-5 text-left pr-5'>
                    <h3>Exceptional Dental
                        Care, on Your Terms</h3>
                    <p>It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its
                        layout. The point of using Lorem Ipsumis that it has
                        a more-or-less normal distribution of letters,as opposed
                        to using ‘Content here, content here’, making it look like
                        readable English. Many desktop publishing packages
                        and web page </p>
                        <button className='btn btn-primary'>Learn More</button>
                </div>

            </div>
        </div>

    );
};

export default ServiceDetails;