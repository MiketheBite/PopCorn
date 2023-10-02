import styled from "styled-components";

export const StarStyled = styled.span`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  display: block;
  cursor: pointer;
`;
