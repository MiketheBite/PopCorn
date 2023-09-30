import { Box, ButtonToggle } from "./WatchedBox.styled";
import WatchedSummary from "../WatchedSummary/WatchedSummary";
import WatchedMovieList from "../WatchedMovieList/WatchedMovieList";

export default function WatchedBox({ watched, isOpen, setIsOpen }) {
  return (
    <Box>
      <ButtonToggle onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? "–" : "+"}
      </ButtonToggle>
      {isOpen && (
        <>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </>
      )}
    </Box>
  );
}
