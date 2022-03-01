import React from 'react';
import Header from './Header/Header';
import MakeAppointment from './MakeAppointment/MakeAppointment';
// import Testimonial from './Testimonial/Testimonial';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;