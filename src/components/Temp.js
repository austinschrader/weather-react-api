import React from 'react';
import './Temp.css';

const Temp = (props) => {
  return (
    <div className='Temp'>
      <p>
        <span className='morn'>Morning: {props.mornTemp}&#176;</span>
      </p>
      <p>
        <span className='day'>Noon: {props.dayTemp}&#176;</span>
      </p>
      <p>
        <span className='night'>Evening: {props.nightTemp}&#176;</span>
      </p>

    </div>
  );
};

export default Temp;
