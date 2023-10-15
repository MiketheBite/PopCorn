import NavBar from "../components/NavBar/Navbar";
import "./App.css";
import { useState } from "react";
import Search from "../components/Search/Search";
import Results from "../components/NumResults/NumResults";
import Main from "../components/Main/Main";
import WatchedMoviesList from "../components/WatchedMovieList/WatchedMovieList";
import Box from "../components/Box/Box";
import MovieList from "../components/MovieList/MovieList";
import WatchedSummary from "../components/WatchedSummary/WatchedSummary";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import { useMovies } from "./useMovies";
import { useLocalStorageState } from "./useLocalStorageState";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const { movies, setMovies, isLoading, error } = useMovies(query);

  const [watched, setWatched] = useLocalStorageState([], "watched");

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);

    // localStorage.setItem("watched", JSON.stringify([...watched, movie]));
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <Results movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} setWatched={setWatched} />
              <WatchedMoviesList
                watched={watched}
                setWatched={setWatched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>

        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList
              movies={movies}
              setMovies={setMovies}
              onSelectMovie={handleSelectMovie}
            />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
      </Main>
    </>
  );
}
