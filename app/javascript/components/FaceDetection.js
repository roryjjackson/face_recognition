import React from 'react'

export class FaceDetection extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
      face_detection: []
    };
   }

   componentDidMount(){
    fetch("/api/v1/face_detection")
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        face_detection: data.result
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        {this.state.face_detection.map(resp => (
        <p key={resp.id}>{resp.name}</p>
      ))}
      </div>
  )
}

}
export default FaceDetection;
