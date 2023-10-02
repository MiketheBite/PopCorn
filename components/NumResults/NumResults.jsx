import { Results } from "./NumResults.styled";

export default function NumResults({ movies }) {
  return (
    <Results>
      Found <strong>{movies ? movies.length : 0}</strong> results{" "}
    </Results>
  );
}
