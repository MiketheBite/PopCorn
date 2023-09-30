import { NumResults } from "./Results.styled";

export default function Results({ movies }) {
  return (
    <NumResults>
      Found <strong>{movies.length}</strong> results
    </NumResults>
  );
}
