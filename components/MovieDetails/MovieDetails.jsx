import { useEffect, useState } from "react";
import {
  Details,
  BackButton,
  DetailsOverview,
  Rating,
  AddButton,
} from "./MovieDetails.styled";
import StarRating from "../StarRating/StarRating";
import Loader from "../Loader/Loader";

const KEY = "cb01b889";

export default function MovieDetails({
  selectedId,
  onCloseMovie,
  onAddWatched,
  watched,
}) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");
  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
    };
    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }
  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      }
      getMovieDetails();
    },
    [selectedId]
  );

  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie | ${title}`;
      //Cleaning up!
      return function () {
        document.title = "PopCorn";
      };
    },
    [title]
  );

  return (
    <Details>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <BackButton onClick={onCloseMovie}>&larr;</BackButton>
            <img src={poster} alt={`Poster of ${movie} movie`} />
            <DetailsOverview>
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span>
                {imdbRating} IMDb rating
              </p>
            </DetailsOverview>
          </header>
          <section>
            <Rating>
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <AddButton onClick={handleAdd}>+ Add to list</AddButton>
                  )}{" "}
                </>
              ) : (
                <p>
                  You rated this movie with {watchedUserRating}
                  <span>⭐️</span>
                </p>
              )}
            </Rating>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </Details>
  );
}
