import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import AppointmentsByDate from './AppointmentsByDate/AppointmentsByDate';
import SideBar from './SideBar/SideBar';
import './DashBoard.css'
import 'react-calendar/dist/Calendar.css';

const DashBoard = () => {
    const [appointDate, setAppointDate] = useState(new Date());
    const handelDateChange = (date) => setAppointDate(date);
    return (
        <section className='container-fluid row containerStyle'>
            <div className='col-md-2'>
                <SideBar></SideBar>
            </div>
            <div className="col-md-5">
                <h2 className='text-primary'>Appointments</h2>
                <Calendar onChange={handelDateChange} value={appointDate} />
            </div>
            <div className="col-md-5">
                <AppointmentsByDate ></AppointmentsByDate>
            </div>
        </section>
    );
};

export default DashBoard;