/* eslint-disable react/prop-types */
import { NavBarContainer } from "./Navbar.styled";
import LogoContainer from "../Logo/Logo";

export default function Navbar({ children }) {
  return (
    <NavBarContainer>
      <LogoContainer />
      {children}
    </NavBarContainer>
  );
}
