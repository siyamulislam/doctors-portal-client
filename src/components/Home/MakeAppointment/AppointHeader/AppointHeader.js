import React, { useState } from 'react';
import chair from './../../../../images/chair.png';
import Calendar from 'react-calendar';
import './AppointHeader.css';
import 'react-calendar/dist/Calendar.css';
const AppointHeader = ({handelDateChange}) => { 
     
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center header-main">
            <div className="col-md-5 offset-md-1 p-5"> 
                <h1 >Appointment</h1>
                <Calendar  onChange={handelDateChange} value={new Date()} /> 
            </div>
            <div className="col-md-5">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default AppointHeader;