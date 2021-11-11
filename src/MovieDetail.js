import { useParams } from "react-router-dom";
// import {useHistory} from 'react-router-dom';

export function MovieDetail({ movies }) {
  const { id } = useParams();
  // const history=useHistory();
  const movie = movies[id];
  console.log(movie);
  const styles = {
    color: movie.rating < 7 ? "crimson" : "green",
    fontWeight: "bold",
  };
  return (
    <div className="movie-detail">
      <iframe
        width="711"
        height="400"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >

      </iframe>
      <h1>Movie Details-{movie.name}{id}</h1>
      <div className="Movie-specs">
        <h3 className="Movie-name">{movie.name}</h3>
        <p className="movie-rating" style={styles}>
          ⭐{movie.rating}
        </p>
      </div>
      {/* <button
        onClick={()=> history.goBack()}
      >Back</button> */}
      <p className="movie-summary">{movie.summary}</p>

    </div>
  );

}
