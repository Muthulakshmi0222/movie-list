import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";

export function AddMovie({ movies, setMovie }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");


  const addMovie = () => {
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer,
    };
    setMovie([...movies, newMovie]);
  };
  return (
    <div className="add-movie-form">
      <TextField value={name} onChange={(event) => setName(event.target.value)} placeholder="Movie name" id="standard-basic" label="Standard" variant="standard" />
      <TextField value={poster} onChange={(event) => setPoster(event.target.value)} placeholder="poster" id="standard-basic" label="Standard" variant="standard" />
      <TextField value={rating} onChange={(event) => setRating(event.target.value)} placeholder="rating" id="standard-basic" label="Standard" variant="standard" />
      <TextField value={summary} onChange={(event) => setSummary(event.target.value)} placeholder="summary" id="standard-basic" label="Standard" variant="standard" />
      <TextField value={trailer} onChange={(event) => setTrailer(event.target.value)} placeholder="trailer" id="standard-basic" label="Standard" variant="standard" />
      <Button onClick={addMovie} variant="text">Add Movie</Button>
    </div>
  );



  // function Addcolor(){
  //   const [color,setColor] = useState("red");
  //   const styles = {backgroundColor:color};
  //   // const colors=["teal" , "pink" , "blue"];
  //   const [colors,setColors]=useState(["teal" , "pink" , "blue"])
  //   return(
  //     <div>
  //       <input 
  //       value={color}
  //       style={styles} 
  //       onChange={(event)=> setColor(event.target.value) } 
  //       plsceholder="Enter a color:" />
  //       <button onClick={()=>setColors([...colors,color])}>Add Color</button>
  //       {colors.map((clr,index)=>(
  //         <ColorBox key={index} color={clr} />
  //       ))}
  //     </div>
  //   )
  // }
  // function ColorBox({color}){
  //   const styles = {backgroundColor:color,
  //                      height:"25px"}
  //       return <div style={styles}></div>
  // }
  // }
}
