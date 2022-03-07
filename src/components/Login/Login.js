import React, { useContext } from 'react';
import LoginBg from '../../images/login.png';
import { UserContext } from '../../App.js';
import { useLocation, useNavigate } from 'react-router-dom';

import { handelGoogleSignIn, initializeLoginFramework } from './loginManager'
initializeLoginFramework()

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const navigate = useNavigate();
  const { state } = useLocation();
  const googleSignIn = () => {
    handelGoogleSignIn()
      .then(res => {
        setLoggedInUser(res);
        navigate(state?.path || "/")
      })
  }


  return (
    <div className="login-page container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 shadow p-5">
          <h3 className='text-muted text-center py-5'>Login</h3>
          <div className="form-group">
            <label htmlFor="">User Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-danger">Forgot your password?</label>
          </div>
          <div className="from-group mt-5">
            <button className="btn btn-primary" onClick={() => {
              console.log('login')
              googleSignIn()
            }
            }>Google Sign in</button>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block align-self-end">
          <img className="img-fluid" src={LoginBg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;