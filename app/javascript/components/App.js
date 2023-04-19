import React, { Component } from 'react';
import MovieInfo from './MovieInfo';
import CelebrityInfo from './CelebrityInfo';
import CelebrityForm from './CelebrityForm';

class App extends Component {
  render(){
    return(
      <div>
        <h2>celebrity info</h2>
        < CelebrityForm />
        < CelebrityInfo />
      </div>

    )
  }
}

export default App
