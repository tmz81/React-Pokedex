import { FormEvent, useCallback } from "react";
import { FaSearch } from 'react-icons/fa';

export function SearchBar() {
  const handleSubmitSearch = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Searching...");
  }, []);

  return (
    <form onSubmit={handleSubmitSearch}>
      <input type="text" placeholder="Search" />
      <button type="submit">
        <FaSearch />
      </button>
    </form>
  )
}