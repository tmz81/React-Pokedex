import { Form } from "./styles";
import { useCallback } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const query = event.target.value.trim();
      onSearch(query);
    },
    [onSearch]
  );

  return (
    <Form>
      <input
        type="text"
        placeholder="Pesquisa Pokémons"
        onChange={handleInputChange}
      />
      <button type="submit" onClick={(e) => e.preventDefault()}>
        <FaSearch />
      </button>
    </Form>
  );
}
