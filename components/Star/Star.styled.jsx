import styled from "styled-components";

export const StarStyled = styled.span`
  width: ${({ width = 48 }) => width};
  height: ${({ height = 48 }) => height};
  display: block;
  cursor: pointer;
`;
