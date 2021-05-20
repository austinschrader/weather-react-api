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

        const mornTemp = res.data.list.filter((element, index) => {
          return (
            index === 1 ||
            index === 9 ||
            index === 17 ||
            index === 25 ||
            index === 33
          );
        });

        const dayTemp = res.data.list.filter((element, index) => {
          return (
            index === 3 ||
            index === 11 ||
            index === 19 ||
            index === 27 ||
            index === 35
          );
        });

        const nightTemp = res.data.list.filter((element, index) => {
          return (
            index === 5 ||
            index === 13 ||
            index === 21 ||
            index === 29 ||
            index === 37
          );
        });

        const city = res.data.city.name;

        this.setState({
          mornTemp,
          dayTemp,
          nightTemp,
          temp,
          city,
        });
      });
  };

  render() {
    return <div className='App'></div>;
  }
}

export default App;
