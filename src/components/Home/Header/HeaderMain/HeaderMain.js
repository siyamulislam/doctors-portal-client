import React from 'react';
import chair from './../../../../images/chair.png';
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <main style={{height:'600px'  }} className="row d-flex align-items-center header-main">
            <div className="col-md-4 offset-md-1 p-5">
                <h1  >Your New Smile <br />Starts Here</h1>
                <p className='text-secondary pr-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repellat ratione illo non, atque error quae harum laboriosam iure minima!</p>
                <button className="btn btn-primary">GET APPOINTMENT</button>
            </div>
            <div className="col-md-5">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;