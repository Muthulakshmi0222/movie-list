import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import {useHistory} from 'react-router-dom';
import {useParams} from 'react-router-dom';

export function EditMovie({ movies, setMovie }) {
    const history=useHistory();
    const {id} = useParams();
    const movie=movies[id];
    
    const [name, setName] = useState(movie.name);
    const [poster, setPoster] = useState(movie.poster);
    const [rating, setRating] = useState(movie.rating);
    const [summary, setSummary] = useState(movie.summary);
    const [trailer, setTrailer] = useState(movie.trailer);


    const editMovie = () => {
        const updatedMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer,
        };
        const copyMovieList=[...movie];
        copyMovieList[id]=updatedMovie;
        setMovie(copyMovieList);
        history.push('/movies')
    };
    return (
        <div className="add-movie-form">
            <TextField value={name} onChange={(event) => setName(event.target.value)} placeholder="Movie name" id="standard-basic" label="Standard" variant="standard" />
            <TextField value={poster} onChange={(event) => setPoster(event.target.value)} placeholder="poster" id="standard-basic" label="Standard" variant="standard" />
            <TextField value={rating} onChange={(event) => setRating(event.target.value)} placeholder="rating" id="standard-basic" label="Standard" variant="standard" />
            <TextField value={summary} onChange={(event) => setSummary(event.target.value)} placeholder="summary" id="standard-basic" label="Standard" variant="standard" />
            <TextField value={trailer} onChange={(event) => setTrailer(event.target.value)} placeholder="trailer" id="standard-basic" label="Standard" variant="standard" />
            <Button onClick={editMovie} variant="text">Add Movie</Button>
        </div>
    );
}