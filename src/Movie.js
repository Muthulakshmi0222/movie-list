import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import { Counter } from "./Counter";

//boolean value to show show summary 

export function Movie({ name, rating, summary, poster }) {
  const [show, setShow] = useState(true);
  //Conditional styling=>
  const styles = {
    color: rating < 7 ? "crimson" : "green",
    fontWeight: "bold",
  };
  const summaryStyles = {
    display: show ? "block" : "none",
  };
  return (
    <div className="movie_container">
      <img src={poster} alt="Movie Image" className="movie-poster" />
      <div className="Movie-specs">
        <h3 className="Movie-name">{name}</h3>
        <p className="movie-rating" style={styles}>⭐{rating}</p>
      </div>
      {/* //show the content value */}
      <button onClick={() => setShow(!show)} className="movie-show-button">
        {show ? "Hide" : "Show"} description
      </button>
         
         {show ? <p className="movie-summary" style={summaryStyles}>{summary}</p> : ""}
       <Counter />
       </div>
  );
}