import React from 'react';
import './Testimonial.css'
const Testimonial = (props) => {
    const {quote,name,from ,img} = props.testimonial;
    return (
        <div className="card shadow-md">
            <div className="card-body">
                <p className="card-text text-center my-3">{quote}</p>
            </div>
            <div className="card-footer d-flex  align-items-center my-2">
                <img className="mx-3" src={img} alt="" width="60"/>
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0 ">{from}</p>
                </div>
            </div>

       </div>
    );
};

export default Testimonial;