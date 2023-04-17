import React from 'react'

export class CelebrityInfo extends React.Component {

  constructor() {
    super();
    this.state = {
      celebrities: []
    }
  }

  componentDidMount() {
  fetch('/api/v1/celebrities', {
    headers: {
      Accept: 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    this.setState({
      celebrities: data
    })
  })
  .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        {this.state.celebrities.map(celeb =>
          <div key={celeb.id}>
            <p>{celeb.name}</p>
          </div>
        )}
      </div>
  )
}

}
export default CelebrityInfo;
