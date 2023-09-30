import { useState } from "react";
import { SearchInput } from "./Search.styled";

export default function Search() {
  const [query, setQuery] = useState("");

  return (
    <SearchInput
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
