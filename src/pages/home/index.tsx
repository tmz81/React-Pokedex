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
      'official-artwork': {
        front_default: string;
      }
    }
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
  const [pokedex, setPokedex] = useState<Pokemon[]>([] as Pokemon[]);

  const GetListPokemons = useCallback(async (FirstId: number, LastId: number) => {
    for (let i = FirstId; i <= LastId; i++) {
      const pokemonSearch = localStorage.getItem(
        `pokemon:${i}`,
      );

      if (pokemonSearch)
        setPokedex(oldPokedex => [...oldPokedex, JSON.parse(pokemonSearch)]);
      else {
        const { data } = await Promise.resolve(api.get(`pokemon/${i}`));

        localStorage.setItem(
          `pokemon:${i}`,
          JSON.stringify(data),
        );

        setPokedex(oldPokedex => [...oldPokedex, data]);
      }
    }
  }, []);

  useEffect(() => {
    GetListPokemons(1, 20);
  }, [setPokedex]);

  return (
    <>
      <Header>
        <Logo />
        <SearchBar />
      </Header>
      <section>
        <PokemonList>
          {pokedex.map(pokemon => (
            <PokemonItem
              key={pokemon.id}
              pokemon={pokemon}
              sprite={pokemon.sprites.other['official-artwork'].front_default}
            />
          ))}
        </PokemonList>
      </section>
    </>
  )
}