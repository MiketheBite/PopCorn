import { Box, ButtonToggle } from "./MovieBox.styled";
import MovieList from "../MovieList/MovieList";

export default function MovieBox({ movies, isOpen, setIsOpen }) {
  return (
    <>
      <Box>
        <ButtonToggle onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? "–" : "+"}
        </ButtonToggle>
        {isOpen && <MovieList movies={movies} />}
      </Box>
    </>
  );
}
