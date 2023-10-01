import styled from "styled-components";

export const StarRatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StarContainer = styled.div`
  display: flex;
`;

export const Text = styled.p`
  line-height: 1;
  margin: 0;
  color: ${({ color = "#fcc419" }) => color};
  font-size: ${({ size = 48 }) => `${size / 1.5}px`};
`;
