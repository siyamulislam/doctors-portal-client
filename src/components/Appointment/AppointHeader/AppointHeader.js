import React from 'react';
import chair from './../../../images/chair.png';
import Calendar from 'react-calendar';
import './AppointHeader.css';
import 'react-calendar/dist/Calendar.css';
const AppointHeader = ({appointDate,handelDateChange}) => { 
    //  console.log(appointDate);
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center ap-header-main">
            <div className="col-md-5 offset-md-1 p-5"> 
                <h1 >Appointment</h1>
                <Calendar  onChange={handelDateChange} value={appointDate} /> 
            </div>
            <div className="col-md-5">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default AppointHeader;