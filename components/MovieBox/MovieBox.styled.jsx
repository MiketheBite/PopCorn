import styled from "styled-components";

export const BoxMain = styled.main`
  margin-top: 2.4rem;
  height: calc(100vh - 7.2rem - 3 * 2.4rem);
  display: flex;
  gap: 2.4rem;
  justify-content: center;
`;

export const Box = styled.div`
  width: 42rem;
  max-width: 42rem;
  background-color: var(--color-background-500);
  border-radius: 0.9rem;
  overflow: scroll;
  position: relative;
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
