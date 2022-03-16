import React, { useEffect, useState } from 'react';
import Doctor from './Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('https://doctors-portal-us.herokuapp.com/doctors', {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
            .then(res => res.json())
            .then(doctor => setDoctors(doctor))
    }, [])
    return (
        <section className="doctors">
            <div className="container  py-5">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                <div className="row">
                     {
                         doctors.map(dc=><Doctor key={dc._id} doctor={dc}></Doctor>)
                     }
                </div>
            </div>
        </section>
    );
};

export default Doctors;