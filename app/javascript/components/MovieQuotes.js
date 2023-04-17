import React from 'react'

export class MovieQuotes extends React.Component {

  constructor() {
     super();
     this.state = {
      movie_quotes: []
    };
   }

   componentDidMount(){
    fetch("/api/v1/movie_quotes"
    // , {
    //   // headers: {
    //   //   Accept: 'application/json'
    //   // }
    // }
    )
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        movie_quotes: data
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        {this.state.movie_quotes.map(item =>
          <p key={item.id}>{item.content}</p>
        )}
      </div>
  )
}

}
export default MovieQuotes;
