import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import AppointmentsByDate from './AppointmentsByDate/AppointmentsByDate';
import SideBar from './SideBar/SideBar';
const DashBoard = () => {
    const [appointDate, setAppointDate] = useState(new Date());
    const handelDateChange = (date) => setAppointDate(date);
    return (
        <section>
            <div className='row'>
            <SideBar className="col-md-4"></SideBar>
            <div className="col-md-4">
                <h2>Appointments</h2>
                 <Calendar  onChange={handelDateChange} value={appointDate} /> </div>
            <AppointmentsByDate className="col-md-4"></AppointmentsByDate> 
        </div>
        </section>
    );
};

export default DashBoard;