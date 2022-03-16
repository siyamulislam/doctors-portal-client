import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Doctor = ({ doctor }) => { 
    const imgPath = doctor.image ? `data:image/png;base64,${doctor.image.img}` : `https://doctors-portal-us.herokuapp.com/${doctor.img}`
    return (
        <div className="col-md-4 text-center">

            <img style={{ height: '300px' }} className="img-fluid mb-3" src={imgPath} alt="" />
            
            {/* {doctor.image ? <img src={`data:image/png;base64,${doctor.image.img}`} alt="" /> :
                <img style={{ height: '300px' }} className="img-fluid mb-3" src={`https://doctors-portal-us.herokuapp.com/${doctor.img}`} alt="" />
            } */}

            <h4>{doctor.name}</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt} /> {doctor.phone}</p>
            <p> <FontAwesomeIcon className="text-primary" icon={faEnvelope} /> {doctor.email}</p>
        </div>
    );
};

export default Doctor;