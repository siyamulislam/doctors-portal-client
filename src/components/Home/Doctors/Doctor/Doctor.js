import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons';
const Doctor = ({doctor}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height:'300px'}} className="img-fluid mb-3" src={`http://localhost:5000/${doctor.img}`}  alt=""/>
            <h4>{doctor.name}</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> {doctor.phone }</p>
            <p> <FontAwesomeIcon className="text-primary" icon={faEnvelope}/> {doctor.email}</p>
        </div>
    );
};

export default Doctor;