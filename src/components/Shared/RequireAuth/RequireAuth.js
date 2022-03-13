import React, { useContext } from 'react';
import { Navigate, useLocation, } from 'react-router-dom';
import { UserContext } from '../../../App';
const RequireAuth = ({ children, ...rest }) => {
    const [loggedInUser] = useContext(UserContext);
    //  console.log(loggedInUser);
    const auth = loggedInUser.isSignedIn;
    console.log(auth); 
    const location = useLocation();
    // console.log(location);
    return (
        (auth || sessionStorage.getItem('token')) ? children
            : <Navigate to="/login"
                replace state={{ path: location.pathname }}
            />
    );
};

export default RequireAuth;
