import React from 'react';
import './App.css';
import weather from '../apis/api';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mornTemp: [],
      dayTemp: [],
      nightTemp: [],
      temp: [],
      city: null,
    };
  }

  searchCity = async (city) => {
    await weather
      .get(`forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
      .then((res) => {
        const temp = res.data.list;
      });
  };

  render() {
    return <div className='App'></div>;
  }
}

export default App;
