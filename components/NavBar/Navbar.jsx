/* eslint-disable react/prop-types */
import LogoContainer from "../Logo/Logo";
import Results from "../Results/Results";
import Search from "../Search/Search";
import { NavBarContainer } from "./Navbar.styled";

export default function Navbar({ movies }) {
  return (
    <NavBarContainer>
      <LogoContainer />
      <Search />
      <Results movies={movies} />
    </NavBarContainer>
  );
}
