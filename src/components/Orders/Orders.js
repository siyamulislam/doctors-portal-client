import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { handelSignOut, initializeLoginFramework } from '../Login/loginManager';
initializeLoginFramework()
const Orders = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    console.log(loggedInUser.name);
    const user= sessionStorage.getItem('loggedInUser')
    const signOut=()=>{ 
        handelSignOut()
        .then(res=>setLoggedInUser(res))
    }
    return (
        <div>
            <h2>Your Appointment List</h2>
            <h2>Your Appointment List</h2>
            <h2>Your Appointment List</h2>
            <h2>Your Appointment List</h2>
            <h2>Your Appointment List</h2>
             <button onClick={()=>signOut()  }>Sign Out</button>
        </div>
    );
};

export default Orders;