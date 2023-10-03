import WatchedMovie from "../WatchedMovie/WatchedMovie";
import { WatchedList } from "./WatchedMovieList.styled";

export default function WatchedMovieList({ watched, onDeleteWatched }) {
  return (
    <WatchedList>
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </WatchedList>
  );
}
