import React from 'react';
import Temp from './Temp';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const ClimateResults = (props) => {
  return (
    <div className='ClimateResults card'>
      <Card>
        <CardContent>
          <div>{props.day}</div>
          <Temp
            mornTemp={props.mornTemp}
            dayTemp={props.dayTemp}
            nightTemp={props.nightTemp}
            minTemp={props.minTemp}
            maxTemp={props.maxTemp}
            humidity={props.humidity}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default ClimateResults;
