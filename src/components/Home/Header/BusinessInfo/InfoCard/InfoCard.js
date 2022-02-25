import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const InfoCard = (props) => {
    const{title,description,icon,backgroundColor}=props.info;
    return (
        <div className='col-md-4'>
            <div >
            <FontAwesomeIcon icon={icon}/>
            </div>
          <div>
              <h6>{title}</h6>
              <small>{description}</small>
          </div>
        </div>
    );
};

export default InfoCard;