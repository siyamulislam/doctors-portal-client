import React, { useState } from 'react';
import { handelSignOut, initializeLoginFramework } from '../../Login/loginManager';
import { UserContext } from '../../../App.js';
import { Link, useNavigate } from 'react-router-dom';
import './SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faFileAlt, faGripHorizontal, faQuoteLeft, faSignOutAlt, faGear} from '@fortawesome/free-solid-svg-icons';
import logo from '../../../images/logo.png';
initializeLoginFramework()
const SideBar = () => {
    const [loggedInUser, setLoggedInUser] = useState(UserContext);
    const user = sessionStorage.getItem('loggedInUser')

    const navigate = useNavigate();
    const signOut = () => {
        console.log('signOut');
        handelSignOut()
            .then(res => {
                console.log(res);
                setLoggedInUser(res)
                navigate('/')
            })
    }
    return (
        <div className="sidebar d-flex flex-column justify-content-between  "  >
    
            <ul className="list-unstyled">
                <li>
                    <Link to="/" style={{ color: '#15D1C8' }}>
                        <img src={logo} alt="logo" width="25px" />
                        <span className="text-white dashHeader"> Online Doctor's Portal </span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /><span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/my-appointment" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /><span>My Appointment</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/my-prescriptions" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /><span>My Prescriptions</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/reviews" className="text-white">
                        <FontAwesomeIcon icon={faQuoteLeft} /><span>Add Review</span>
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