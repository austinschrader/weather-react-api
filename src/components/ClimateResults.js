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
        </CardContent>
      </Card>
    </div>
  );
};

export default ClimateResults;
