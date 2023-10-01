import WatchedMovie from "../WatchedMovie/WatchedMovie";
import { WatchedList } from "./WatchedMovieList.styled";

export default function WatchedMovieList({ watched }) {
  return (
    <WatchedList>
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </WatchedList>
  );
}
