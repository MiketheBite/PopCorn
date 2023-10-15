import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 45rem;
  max-width: 100%;
  background-color: var(--color-background-500);
  border-radius: 0.9rem;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ButtonToggle = styled.button`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  height: 2.4rem;
  aspect-ratio: 1;
  border-radius: 50%;
  border: none;
  background-color: var(--color-background-900);
  color: var(--color-text);
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
  z-index: 999;
`;
