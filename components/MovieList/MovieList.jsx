import Movie from "../Movie/Movie";
import { List } from "./MovieList.styled";

export default function MovieList({ movies, onSelectMovie }) {
  return (
    <List>
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </List>
  );
}
