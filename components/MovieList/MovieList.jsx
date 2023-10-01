import Movie from "../Movie/Movie";
import { List } from "./MovieList.styled";

export default function MovieList({ movies }) {
  return (
    <List>
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </List>
  );
}
