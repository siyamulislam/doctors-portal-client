import React from 'react';
import Blogs from './Blogs/Blogs';
import Doctors from './Doctors/Doctors';
import Header from './Header/Header';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;