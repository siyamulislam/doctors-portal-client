import React, { useState } from 'react';

const AppointmentsByDate = ({ appointments, selectedDate }) => {
    console.log(appointments);
    const selectedDateMod = selectedDate.toLocaleString('en-us', { month: 'long', day: 'numeric' }) + ',' + selectedDate.getFullYear();
    const [visitingStatus, setVisitingStatus] = useState(false);

    return (
        <div>
            <div className='d-flex justify-content-between p-4'>
                <h6 className='text-primary '>Appointments: {appointments.length} </h6>
                <h6 className='text-muted'>{selectedDateMod}</h6>
            </div>
            {
                appointments.length === 0 ?
                    <h6 className='text-center pt-5'>No Appointments for this Date</h6> :
                    <div>
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th className="text-secondary" scope="col">
                                        Name
                                    </th>
                                    <th className="text-secondary" scope="col">
                                        Schedule
                                    </th>
                                    <th className="text-secondary text-center" scope="col">
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {appointments.map((ap) => (
                                    <tr>
                                        <td>{ap.name}</td>
                                        <td>{ap.schedule}</td>
                                        <td className="text-center">
                                            <select
                                                // onClick={() => setSelectAppointment(ap)}
                                                onChange={(e) => {
                                                    visitingStatus ? setVisitingStatus(false) : setVisitingStatus(true)

                                                }}
                                                className={
                                                    visitingStatus === true ? (
                                                        'btn btn-primary text-capitalize'
                                                    ) : (
                                                        'btn btn-danger text-capitalize'
                                                    )
                                                }
                                            >
                                                <option
                                                    selected={visitingStatus === false}
                                                    className="bg-white text-secondary"
                                                >
                                                    Not Visited
                                                </option>
                                                <option
                                                    selected={visitingStatus === true}
                                                    className="bg-white text-secondary"
                                                >
                                                    Visited
                                                </option>
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    );
};

export default AppointmentsByDate;