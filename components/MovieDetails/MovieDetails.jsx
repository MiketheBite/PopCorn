import { useEffect, useState } from "react";
import {
  Details,
  BackButton,
  DetailsOverview,
  Rating,
} from "./MovieDetails.styled";
import StarRating from "../StarRating/StarRating";
import Loader from "../Loader/Loader";

const KEY = "cb01b889";

export default function MovieDetails({ selectedId, onCloseMovie }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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

  console.log(title, year);

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
              <StarRating maxRating={10} size={24} />
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
