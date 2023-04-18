import React from 'react';

class CelebrityForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newImageUrl: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.newImageUrl);
    this.setState({ newImageUrl: '' });
  }

  handleImageUrlChange = (event) => {
    this.setState({ newImageUrl: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          New Image URL:
          <input type="text" value={this.state.newImageUrl} onChange={this.handleImageUrlChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default CelebrityForm;
