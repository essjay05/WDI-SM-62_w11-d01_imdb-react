import React, { Component } from 'react';
import Movie from './Movie';


class App extends Component {
  render() {
    const movies = [
      { title: "Crazy Rich Asians", rating: "PG-13" },
      { title: "Bring it On", rating: "PG-13" },
      { title: "Queen of the Damned", rating: "R" }
    ];

    return(
      <div>
        {movies.map((movie, i) => {
          return <Movie key={i} movie={movie}/>
        })}
      </div>
  
     );
  }
};


export default App;