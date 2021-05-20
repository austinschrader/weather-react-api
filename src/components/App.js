import React from 'react';
import './App.css';

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

  render() {
    return <div className='App'></div>;
  }
}

export default App;
