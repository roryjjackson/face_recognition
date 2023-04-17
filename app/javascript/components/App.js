import React, { Component } from 'react';
import MovieInfo from './MovieInfo';
// import FaceDetection from './FaceDetection';
import CelebrityInfo from './CelebrityInfo';


class App extends Component {
  render(){
    return(
      <div>
        <h1> React says Hello!</h1>
        < MovieInfo />
        <h2>celebrity info</h2>
        < CelebrityInfo />
        {/* <h2>This is the face detection section</h2> */}
        {/* < FaceDetection /> */}
      </div>

    )
  }
}

export default App
