import styled from "styled-components";
export const SummaryBox = styled.div`
  padding: 2.2rem 3.2rem 1.8rem 3.2rem;
  border-radius: 0.9rem;
  background-color: var(--color-background-100);
  box-shadow: 0 1.2rem 2.4rem rgba(0, 0, 0, 0.2);
  & h2 {
    text-transform: uppercase;
    font-size: 1.6rem;
    margin-bottom: 0.6rem;
  }

  & div {
    display: flex;
    align-items: center;
    gap: 2.4rem;
    font-size: 1.6rem;
    font-weight: 600;
  }

  & p {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;
