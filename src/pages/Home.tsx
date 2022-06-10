import { useCallback, useEffect, useState } from "react";
import { Header, Logo, PokemonList  } from "../styles/home";
import { Pokemon } from "../components/Pokemon";
import { api } from "../services/api";
import { SearchBar } from "../components/SearchBar";

interface Pokemon {
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

  const getPokemonList = useCallback(async (startId: number, endId: number) => {
    for (let i = startId; i <= endId; i++) {
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
    getPokemonList(1, 20);
  }, [getPokemonList]);
  
  return (
    <>
      <Header>
        <Logo/>
        <SearchBar />
      </Header>
      <section>
        <PokemonList>
          {pokedex.map(pokemon => (
            <Pokemon 
            pokemon={pokemon}
            sprite={pokemon.sprites.other['official-artwork'].front_default}  
          />
          ))}
        </PokemonList>
      </section>
    </>
  )
}