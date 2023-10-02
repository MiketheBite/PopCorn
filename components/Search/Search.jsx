import { SearchInput } from "./Search.styled";

export default function Search({ query, setQuery }) {
  return (
    <SearchInput
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
