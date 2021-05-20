import React from 'react';
import './Temp.css';

const Temp = (props) => {
  return (
    <div className='Temp'>
      <p>
        <span className='morn'>Morning: {props.mornTemp}&#176;</span>
      </p>
    </div>
  );
};

export default Temp;
