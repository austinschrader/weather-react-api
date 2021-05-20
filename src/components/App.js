import React from 'react';
import './App.css';
import weather from '../apis/api';
import ClimateResults from './ClimateResults';
import Search from './Search';
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

    return (
      <div className='App'>
        <React.Fragment>
          <Search city={this.state.city} searchCity={this.searchCity} />
        </React.Fragment>
        <ClimateResults
          day={'Thu'}
          mornTemp={mornTemp[0]}
          dayTemp={dayTemp[0]}
          nightTemp={nightTemp[0]}
          minTemp={minTemp[0]}
          maxTemp={maxTemp[0]}
          humidity={humidity[0]}
        />
        <ClimateResults
          day={'Fri'}
          mornTemp={mornTemp[1]}
          dayTemp={dayTemp[1]}
          nightTemp={nightTemp[1]}
          minTemp={minTemp[1]}
          maxTemp={maxTemp[1]}
          humidity={humidity[1]}
        />
        <ClimateResults
          day={'Sat'}
          mornTemp={mornTemp[2]}
          dayTemp={dayTemp[2]}
          nightTemp={nightTemp[2]}
          minTemp={minTemp[2]}
          maxTemp={maxTemp[2]}
          humidity={humidity[2]}
        />
        <ClimateResults
          day={'Sun'}
          mornTemp={mornTemp[3]}
          dayTemp={dayTemp[3]}
          nightTemp={nightTemp[3]}
          minTemp={minTemp[3]}
          maxTemp={maxTemp[3]}
          humidity={humidity[3]}
        />
        <ClimateResults
          day={'Mon'}
          mornTemp={mornTemp[4]}
          dayTemp={dayTemp[4]}
          nightTemp={nightTemp[4]}
          minTemp={minTemp[4]}
          maxTemp={maxTemp[4]}
          humidity={humidity[4]}
        />
      </div>
    );
  }
}

export default App;
