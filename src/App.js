import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton'
import "./App.css";

export default function App() {
  const Initial_Movie = [
    {
      name: "Enemy",
      rating: "8.2",
      summary: "It's the story of two childhood friends and their escalating competitive nature. To what extent are they ready to go?",
      poster:
        "https://m.media-amazon.com/images/M/MV5BYjAzMGJjNDYtZGQyNC00ZGY5LWEzNjEtYjA1OWNhZTNhZGEzXkEyXkFqcGdeQXVyODEyNjEwMDk@._V1_.jpg"
    },
    {
      name: "Jai Bhim",
      rating: "9.6",
      summary: "When a tribal man is arrested for a case of alleged theft, his wife turns to a human-rights lawyer to help bring justice.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg"
    },
    {
      name: "96",
      rating: "8.6",
      summary: "Two high school sweethearts meet at a reunion after 22 years and reminisce about their past.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BZTM1MGM3NjgtZjE4Mi00ZTNlLWI3ODAtNTViZjFmMDc3MjlhXkEyXkFqcGdeQXVyOTA3MTM0MTM@._V1_.jpg"
    },
    {
      name:"Oh Manapenne",
      rating:"7.4",
      summary:"A wannabe businesswoman and a happy-go-lucky guy meet each other during an arranged marriage blind date but eventually team up to start a food truck on their own.",
      poster:"https://m.media-amazon.com/images/M/MV5BNTAwNTQ1OTktMmM4ZC00YTNmLWI4MWQtNTFkNmY3YTc5MWFiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_.jpg"
    },
    {
      name:"Annaatthe",
      rating:"4.2",
      summary:"Kaaliyan has a sister who marries and moves to Kolkata, where she faces unknown threats. Soon her brother comes to the rescue.",
      poster:"https://m.media-amazon.com/images/M/MV5BNGY1ZmZjMjktMWJhMC00YWQ2LWFiNWMtMjJkODU1YTQ5NDA4XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_.jpg"
    },
    {
      name:"Soorarai Pottru",
      rating:"9.1",
      summary:"Nedumaaran Rajangam 'Maara' sets out to make the common man fly and in the process takes on the world's most capital intensive industry and several enemies who stand in his way.",
      poster:"https://m.media-amazon.com/images/M/MV5BNjUwMjAwYWEtNzMxZS00YTYwLTk4ZTAtZGI4NmEzNDY3M2UzXkEyXkFqcGdeQXVyMTI0NTM3MjI3._V1_.jpg"
    }
  ];
  const [name,setName] = useState("");
  const [poster,setPoster]=useState("");
  const [rating,setRating]=useState("");
  const [summary,setSummary]=useState("");

  const [movies,setMovie] = useState(Initial_Movie);
  const addMovie=()=>{
    console.log("Adding Movie");
    const newMovie={
      name:name,
      poster:poster,
      rating:rating,
      summary:summary,
    }
    setMovie([...movies,newMovie]);
  }
  return (
    <div className="App">
      <div>
      <TextField  value={name} onChange={(event)=> setName(event.target.value)} placeholder="Movie name" id="standard-basic" label="Standard" variant="standard" />
      <TextField value={poster} onChange={(event)=> setPoster(event.target.value)} placeholder="poster"  id="standard-basic" label="Standard" variant="standard" />
      <TextField value={poster} onChange={(event)=> setRating(event.target.value)} placeholder="poster" id="standard-basic" label="Standard" variant="standard" />
      <TextField value={summary} onChange={(event)=> setSummary(event.target.value)} placeholder="summary" id="standard-basic" label="Standard" variant="standard" />
      <Button onClick={addMovie} variant="text">Add Movie</Button>
        {/* <button ></button> */}
      </div>
      <MovieList movies={movies} />
    </div>
  );
}

function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div className="counter-container">
      <IconButton  
      className="likes-dislike" 
      onClick={() => setLike(like + 1)} 
      aria-label="delete" 
      color="primary">
      👍{like}
    </IconButton>
    <IconButton 
    className="likes-dislikes"
    onClick={() => setDislike(dislike + 1)}
    aria-label="delete"
     color="primary">
    👎{dislike}
</IconButton>
    </div>
  );
}
//Movie List 
function MovieList({ movies }) {
  return (
    <section className="movie-list">
      {movies.map(({name, rating, summary, poster}) => (
        <Movie name={name} rating={rating} summary={summary} poster={poster} />
      ))}
    </section>
  );
}
//boolean value to show show summary 
function Movie({ name, rating, summary, poster }) {
  const [show, setShow] = useState(true);
  //Conditional styling=>
  const styles = {
    color: rating < 7 ? "crimson" : "green",
    fontWeight: "bold",
  };
  const summaryStyles = {
    display: show ? "block" : "none"
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
