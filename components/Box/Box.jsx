import { useState } from "react";
import { BoxContainer, ButtonToggle } from "./Box.styled";

export default function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <BoxContainer>
        <ButtonToggle onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? "–" : "+"}
        </ButtonToggle>
        {isOpen && children}
      </BoxContainer>
    </>
  );
}
