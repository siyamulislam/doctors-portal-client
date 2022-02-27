import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './InfoCard.css'
const InfoCard = (props) => {
    const { title, description, icon, backgroundColor } = props.info;
    return (
        <div className='col-md-4 p-1'>
            <div className='d-flex text-white card-Container' style={{ backgroundColor: backgroundColor }}>
                <div className='p-2'>
                    <FontAwesomeIcon icon={icon} color='white' size="3x" />
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