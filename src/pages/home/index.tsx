import { useCallback, useEffect, useState } from "react";
import { Header, Logo, PokemonList } from "./styles";
import { PokemonItem } from "../../components/pokemonItem";
import { api } from "../../services/api";
import { SearchBar } from "../../components/searchBar";

interface Pokemon {
  id: number;
  name: string;
  order: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: PokemonType[];
}

interface PokemonType {
  slot: number;
  type: {
    name: string;
  };
}

export function Home() {
  const [pokedex, setPokedex] = useState<Pokemon[]>([]);
  const [filteredPokedex, setFilteredPokedex] = useState<Pokemon[]>([]);

  const GetListPokemons = useCallback(
    async (FirstId: number, LastId: number) => {
      const fetchedPokemons: Pokemon[] = [];

      for (let i = FirstId; i <= LastId; i++) {
        const pokemonSearch = localStorage.getItem(`pokemon:${i}`);

        if (pokemonSearch) {
          fetchedPokemons.push(JSON.parse(pokemonSearch));
        } else {
          const { data } = await api.get(`pokemon/${i}`);
          localStorage.setItem(`pokemon:${i}`, JSON.stringify(data));
          fetchedPokemons.push(data);
        }
      }

      setPokedex((oldPokedex) => {
        const combinedPokedex = [...oldPokedex, ...fetchedPokemons];
        const uniquePokedex = Array.from(
          new Set(combinedPokedex.map((p) => p.id))
        ).map((id) => combinedPokedex.find((p) => p.id === id));
        setFilteredPokedex(uniquePokedex as Pokemon[]);
        return uniquePokedex as Pokemon[];
      });
    },
    []
  );

  useEffect(() => {
    GetListPokemons(1, 20);
  }, [GetListPokemons]);

  const handleSearch = useCallback(
    async (query: string) => {
      if (query === "") {
        setFilteredPokedex(pokedex);
      } else {
        try {
          const { data } = await api.get(`pokemon/${query.toLowerCase()}`);
          setFilteredPokedex([data]);
        } catch (error) {
          const filtered = pokedex.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(query.toLowerCase())
          );
          setFilteredPokedex(filtered);
        }
      }
    },
    [pokedex]
  );

  useEffect(() => {
    setFilteredPokedex(pokedex); // Atualizar a lista filtrada quando o pokedex for atualizado
  }, [pokedex]);

  return (
    <>
      <Header>
        <Logo />
        <SearchBar onSearch={handleSearch} />
      </Header>
      <section>
        <PokemonList>
          {filteredPokedex.map((pokemon) => (
            <PokemonItem
              key={pokemon.id}
              pokemon={pokemon}
              sprite={pokemon.sprites.other["official-artwork"].front_default}
            />
          ))}
        </PokemonList>
      </section>
    </>
  );
}
