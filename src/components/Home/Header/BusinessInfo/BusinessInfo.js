import React from 'react';
import './BusinessInfo.css'
import InfoCard from './InfoCard/InfoCard';
import {faClock,faMapMarkerAlt,faPhone} from '@fortawesome/free-solid-svg-icons'


const BusinessInfo = () => {
    const infoData=[
        {
            title:'Opening Hour',
            description:'we open 24 hour 30 days! dont worry ',
            icon: faClock,
            backgroundColor:'#1CC7C1'
        },
        {
            title:'Visit Our Location',
            description:' 34/25, chairmaner goli, Badda , Dhaka-2322',
            icon: faMapMarkerAlt,
            backgroundColor:'#3A4256'
        },
        {
            title:'Contact Us Now',
            description:'+990171715664',
            icon: faPhone,
            backgroundColor:'#1CC7C1'
        },
    ]
    return (
       <section className='row   d-flex justify-content-center '>
          <div className='w-75 row ' >
          {
               infoData.map(info=><InfoCard info={info} key={info.title}></InfoCard>)
           }
          </div>
       </section>
    );
};

export default BusinessInfo;