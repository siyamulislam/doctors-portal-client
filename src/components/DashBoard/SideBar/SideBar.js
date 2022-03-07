import React, { useState } from 'react'; 
import { handelSignOut, initializeLoginFramework } from '../../Login/loginManager';
import { UserContext } from '../../../App.js';
import { useNavigate } from 'react-router-dom';
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
        <div>
            <h2>Dashboard</h2>
            <h2>Dashboard</h2> 
            <h2>Dashboard</h2> 
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
    );
};

export default SideBar;