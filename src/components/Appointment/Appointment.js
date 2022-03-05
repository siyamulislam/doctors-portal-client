import React, { useState } from 'react';
import AppointHeader from './AppointHeader/AppointHeader'; 
import BookAppointment from './BookAppointment/BookAppointment';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Appointment = () => {

    const [appointDate, setAppointDate] = useState(new Date());
    const handelDateChange = (date) => setAppointDate(date);
    // console.log(appointDate);
    // console.log(value.toLocaleDateString('en-GB').split('/').reverse().join('/'))
    // console.log(appointDate.toLocaleDateString('en-GB').split('/').join('/'))
    return (
        <div>
            <Navbar></Navbar>
            <AppointHeader appointDate={appointDate} handelDateChange={handelDateChange} ></AppointHeader>
            <BookAppointment date={appointDate}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;