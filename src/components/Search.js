import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Search.css';

class Search extends React.Component {
  state = {
    city: '',
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.city === '') {
      alert('City can not be empty');
    } else {
      this.props.searchCity(this.state.city);
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div className='Search'>
        <div className='SearchChilds'>
          <h5 className='text-white'>Search weather for your city</h5>

          <form onSubmit={this.onSubmit} className='formSearchCity'>
            <TextField
              name='city'
              id='inputSearchCity'
              label='Search City...'
              variant='outlined'
              onChange={this.onChange}
            />
            <Button size='large' variant='contained' type='submit'>
              Search
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
