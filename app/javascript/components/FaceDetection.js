import React from 'react'

export class FaceDetection extends React.Component {

  constructor() {
     super();
     this.state = {
      face_detection: []
    };
   }

   componentDidMount(){
    fetch("/api/v1/face_detection"
    // , {
    //   // headers: {
    //   //   Accept: 'application/json'
    //   // }
    // }
    )
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        face_detection: data
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        {this.state.face_detection[0].name}
      </div>
  )
}

}
export default FaceDetection;
