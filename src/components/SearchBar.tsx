import { Form } from '../styles/searchbar';
import { FormEvent, useCallback } from "react";
import { FaSearch } from 'react-icons/fa';

export function SearchBar() {
  const handleSubmitSearch = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Searching...");
  }, []);

  return (
    <Form onSubmit={handleSubmitSearch}>
      <input type="text" placeholder="Pesquisa Pokémons" />
      <button type="submit">
        <FaSearch />
      </button>
    </Form>
  )
}