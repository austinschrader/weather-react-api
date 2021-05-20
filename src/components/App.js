import React from 'react';
import './App.css';
import weather from '../apis/api';
import kelvinToFahrenheit from 'kelvin-to-fahrenheit';

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
    const mornTemp = this.state.mornTemp.map((element) => {
      return parseInt(kelvinToFahrenheit(element.main.temp));
    });

    const dayTemp = this.state.dayTemp.map((element) => {
      return parseInt(kelvinToFahrenheit(element.main.temp));
    });

    const nightTemp = this.state.nightTemp.map((element) => {
      return parseInt(kelvinToFahrenheit(element.main.temp));
    });

    const minTemp = this.state.mornTemp.map((element) => {
      return parseInt(kelvinToFahrenheit(element.main.temp_min));
    });

    const maxTemp = this.state.temp.map((element) => {
      return parseInt(Math.max(kelvinToFahrenheit(element.main.temp_max)));
    });

    const humidity = this.state.temp.map((element) => {
      return parseInt(Math.max(kelvinToFahrenheit(element.main.humidity)));
    });

    return <div className='App'></div>;
  }
}

export default App;
