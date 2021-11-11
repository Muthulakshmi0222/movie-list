import { Movie } from "./Movie";
import {useHistory} from 'react-router-dom';
export function MovieList({ movies, setMovie }) {
  const history=useHistory();
  return (
    <section className="movie-list">
      {movies.map(({ name, rating, summary, trailer, poster }, index) => (
        <Movie name={name}
          rating={rating}
          summary={summary}
          trailer={trailer}
          poster={poster}
          id={index}
          deleteButton={
            <button
              onClick={() => {
                const remainingMovie = movies.filter(
                  (mv, idx) => idx !== index
                )
                setMovie(remainingMovie);
              }}>
              Delete
            </button>
          }

          editButton={<button
            onClick={() => history.push("/movies/edit" + index)}
          >
            Edit
          </button>}
        />
      ))}
    </section>
  );
}
