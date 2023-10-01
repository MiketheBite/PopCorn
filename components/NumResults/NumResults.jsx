import { Results } from "./NumResults.styled";

export default function NumResults({ movies }) {
  return (
    <Results>
      Found <strong>{movies.length}</strong> results
    </Results>
  );
}
