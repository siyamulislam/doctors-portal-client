import React, { useEffect, useState } from 'react';
import { Calendar } from 'react-calendar';
import AppointmentsByDate from './AppointmentsByDate/AppointmentsByDate';
import SideBar from './SideBar/SideBar';
import './DashBoard.css'
import 'react-calendar/dist/Calendar.css';

const DashBoard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ selectedDate })
        })
            .then(res => res.json())
            .then(appointment =>setAppointments(appointment))

    }, [selectedDate])

    const handelDateChange = (date) => setSelectedDate(date);

    // console.log(appointments);

    return (
        <section className='container-fluid row containerStyle'>
            <div className='col-md-2 sidebarContainer'>
                <SideBar></SideBar>
            </div>
            <div className="col-md-5 AppointmentsContainer  position-relative">

            <div className='  position-absolute  top-0 start-0 p-3 '><h5 className='text-primary_dark '>Appointments</h5></div>
                <div className=' AppointmentsComponents'>
                    <Calendar onChange={handelDateChange} value={selectedDate} />
                </div>
            </div>
            <div className="col-md-5 AppointmentsListDateContainer">
                <div className='AppointmentsListDateComponents'>
                    <AppointmentsByDate appointments={appointments} selectedDate={selectedDate}></AppointmentsByDate>
                </div>
            </div>
        </section>
    );
};

export default DashBoard;