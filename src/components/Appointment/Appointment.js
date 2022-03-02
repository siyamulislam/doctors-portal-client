import React, { useState } from 'react';
import AppointHeader from '../Home/MakeAppointment/AppointHeader/AppointHeader';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Appointment = () => {

    const [appointDate, setAppointDate] = useState(new Date());
    const handelDateChange = (date) => setAppointDate(date);
    console.log(appointDate);
    // console.log(value.toLocaleDateString('en-GB').split('/').reverse().join('/'))
    console.log(appointDate.toLocaleDateString('en-GB').split('/').join('/'))
    return (
        <div>
            <Navbar></Navbar>
            <AppointHeader handelDateChange={handelDateChange}></AppointHeader>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;