import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {  Link } from "react-router-dom";
import "./App.css";
import { MovieList } from "./MovieList";
import {useState} from "react";


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
  const [movies,setMovie] = useState(Initial_Movie);
  return(
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movie">Movies</Link>
        <Link to="/addMovie">Add Movie</Link>
        <Link>Color</Link>
      </nav>
      {/* <Switch>
        <Route path="/movies">
          <MovieList movies={movies} />
          </Route>
          <Route path="/addMovie">
            <AddMovie movies={movies} setMovie={setMovie} />
          </Route>

      </Switch> */}

      <AddMovie movies={movies} setMovie={setMovie} />
      <MovieList movies={movies} />
    </div>
  )
  
  
}

function AddMovie({movies,setMovie}){
  const [name,setName] = useState("");
  const [poster,setPoster]=useState("");
  const [rating,setRating]=useState("");
  const [summary,setSummary]=useState("");

  
  const addMovie=()=>{
    const newMovie={
      name:name,
      poster:poster,
      rating:rating,
      summary:summary,
    }
    setMovie([...movies,newMovie]);
  }
  return(
    <div className="add-movie-form">
      <TextField  value={name} onChange={(event)=> setName(event.target.value)} placeholder="Movie name" id="standard-basic" label="Standard" variant="standard" />
      <TextField value={poster} onChange={(event)=> setPoster(event.target.value)} placeholder="poster"  id="standard-basic" label="Standard" variant="standard" />
      <TextField value={poster} onChange={(event)=> setRating(event.target.value)} placeholder="poster" id="standard-basic" label="Standard" variant="standard" />
      <TextField value={summary} onChange={(event)=> setSummary(event.target.value)} placeholder="summary" id="standard-basic" label="Standard" variant="standard" />
      <Button onClick={addMovie} variant="text">Add Movie</Button>
    </div>
  )



function AddColor(){
  const [color,setColor] = useState("red");
  const styles = {backgroundColor:color};
  // const colors=["teal" , "pink" , "blue"];
  const [colors,setColors]=useState(["teal" , "pink" , "blue"])
  return(
    <div>
      <input 
      value={color}
      style={styles} 
      onChange={(event)=> setColor(event.target.value) } 
      plsceholder="Enter a color:" />
      <button onClick={()=>setColors([...colors,color])}>Add Color</button>
      {colors.map((clr,index)=>(
        <ColorBox key={index} color={clr} />
      ))}
      
    </div>
  )
}
function ColorBox({color}){
  const styles = {backgroundColor:color,
                     height:"25px"}
      return <div style={styles}></div>
}
}