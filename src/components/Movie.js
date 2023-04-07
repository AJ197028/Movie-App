import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  console.log(props.movie);
  const deleteHandler= async (e)=>{
    e.preventDefault();
    console.log(props.movie);
    const response = await fetch(`https://react-http-8b260-default-rtdb.firebaseio.com/movies/${props.movie.id}.json`,{
      method:"DELETE",
      headers:{
        'Content-Type': 'application/json'
      }
    })
    console.log(response);
    window.location.reload(false)
  }

  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button style={{background:"red"}} onClick={deleteHandler}>Delete</button>
    </li>
  );
};

export default Movie;
