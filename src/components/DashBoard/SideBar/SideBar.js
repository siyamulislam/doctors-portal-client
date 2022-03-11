import React, { useContext, useEffect, useState } from 'react';
import { handelSignOut, initializeLoginFramework } from '../../Login/loginManager';
import { UserContext } from '../../../App.js';
import { Link, useNavigate } from 'react-router-dom';
import './SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faFilePrescription, faGripHorizontal, faQuoteLeft, faSignOutAlt, faGear, faUserDoctor, faHospitalAlt } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../images/logo.png';
initializeLoginFramework()
const SideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [doctor, setDoctor] = useState([]);
    const [isDoctor, setIsDoctor] = useState(false);
    const [isAdmin, setAdmin] = useState(false);
    // const user = sessionStorage.getItem('loggedInUser') 
    useEffect(() => {
        fetch('http://localhost:5000/isDoctor', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(result => {
                if (result.length !== 0) {
                    setIsDoctor(true)
                    setDoctor(result[0])
                    console.log(result[0]);
                };
            })
    }, [])

    const navigate = useNavigate();
    const signOut = () => {
        console.log('signOut');
        handelSignOut()
            .then(res => {
                setLoggedInUser(res)
                navigate('/')
            })
    }
    const profileStyle= {
        width:80, borderRadius: 120,marginBottom:5,
        border: '1px solid rgba(0, 0, 0, 0.02)',  
        borderWidth: 20, 
        }
    return (
        <div className="sidebar d-flex flex-column justify-content-between  "  >

            <ul className="list-unstyled">
                 
                    <img style={profileStyle}  src={isDoctor ? `http://localhost:5000/${doctor.img}` : loggedInUser.url} alt="logo"  />
                
                <li>

                    <span className="text-white dashHeader"> <strong>{loggedInUser.name} </strong> <sub>({isAdmin ? 'Admin' : isDoctor ? 'Doctor' : 'Patient'})</sub></span>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHospitalAlt} />
                        <span className="text-white"> Online Doctor's Portal </span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /><span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/my-appointment" className="text-white">
                        <FontAwesomeIcon icon={faCalendarCheck} /><span>My Appointment</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/my-prescriptions" className="text-white">
                        <FontAwesomeIcon icon={faFilePrescription} /><span>My Prescriptions</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/reviews" className="text-white">
                        <FontAwesomeIcon icon={faQuoteLeft} /><span>Add Review</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/add-doctor" className="text-white">
                        <FontAwesomeIcon icon={faUserDoctor} /><span>Add Doctor</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/settings" className="text-white">
                        <FontAwesomeIcon icon={faGear} /><span>Settings</span>
                    </Link>
                </li>
            </ul>

            <div>
                <Link to="/" className="text-white">
                    <FontAwesomeIcon icon={faSignOutAlt} /><span onClick={() => signOut()}>Log Out</span>
                </Link>
            </div>
        </div>
    );
};

export default SideBar;