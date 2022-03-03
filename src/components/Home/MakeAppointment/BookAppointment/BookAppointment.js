import React, { useState } from 'react';
import "./BookAppointment.css"

const BookAppointment = ({date}) => {
    // const [appointDate, setAppointDate] = useState(props.appointDate); 
    const appointDate= date.toDateString();
    return (
        <section className='text-center'>
            <h1 className='text-primary'>Available Appointments on {appointDate }</h1>
        </section>
    );
};

export default BookAppointment;