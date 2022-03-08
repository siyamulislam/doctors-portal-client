import React from 'react';

const AppointmentsByDate = ({ appointments, selectedDate }) => {
    console.log(appointments);
    const selectedDateMod = selectedDate.toLocaleString('en-us', { month: 'long', day: 'numeric' }) + ',' + selectedDate.getFullYear();
    return (
        <div>
            <div className='d-flex justify-content-between p-4'>
                <h6 className='text-primary '>Appointments: {appointments.length} </h6>
                <h6 className='text-muted'>{selectedDateMod}</h6>
            </div>
            <ul>
                {
                    appointments.map(ap => <li key={ap._id} >  {ap.name}  </li>)
                }
            </ul>

        </div>
    );
};

export default AppointmentsByDate;