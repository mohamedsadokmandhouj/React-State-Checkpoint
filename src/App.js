

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'med sadok',
        bio: 'Software Developer',
        imgSrc: 'https://via.placeholder.com/150',
        profession: 'Developer'
      },
      shows: false,
      timeInterval: 0
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1
      }));
    }, 1000); 
  }

  componentWillUnmount() {
    clearInterval(this.interval); 
  }

  toggleShow() {
    this.setState((prevState) => ({
      shows: !prevState.shows
    }));
  }

  render() {
    const { person, shows, timeInterval } = this.state;
    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div className="profile">
            <img src={person.imgSrc} alt={person.fullName} />
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <p>{person.profession}</p>
          </div>
        )}
        <p>Time since component mounted: {timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;
