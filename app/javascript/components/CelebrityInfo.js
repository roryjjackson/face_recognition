import React from 'react';
import CelebrityForm from './CelebrityForm';

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

  handleSubmit = (newImageUrl) => {
    // Make an AJAX request to the Rails controller to update the image URL
    fetch('/api/v1/celebrities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image_url: newImageUrl
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Update the state to reflect the new image URL
      this.setState({ celebrities: data });
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        {this.state.celebrities.map(celeb =>
          <p key={celeb.id}>{celeb.name}</p>
        )}

        <CelebrityForm onSubmit={this.handleSubmit} />
      </div>
  )
}

}
export default CelebrityInfo;
