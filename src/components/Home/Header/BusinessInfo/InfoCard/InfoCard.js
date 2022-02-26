import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const InfoCard = (props) => {
    const { title, description, icon, backgroundColor } = props.info;
    return (
        <div className='col-md-3'  style={{margin:'0px 0px'}}>
            <div className='d-flex text-white' style={{backgroundColor:backgroundColor,padding:'30px 50px'}}>
                <div >
                    <FontAwesomeIcon icon={icon} />
                </div>
                <div> 
                    <h6>{title}</h6>
                    <small>{description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;