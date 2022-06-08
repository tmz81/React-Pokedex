import { useEffect } from "react";
import { Header, Title, PokemonList  } from "../styles/home";
import { Pokemon } from "../components/Pokemon";
import { usePokemon } from "../hooks/usePokemon";

export function Home() {
  const { getPokemonList } = usePokemon();

  useEffect(() => {
    getPokemonList();
  }, [getPokemonList]);
  
  return (
    <>
      <Header>
        <Title>Pokedéx</Title>
      </Header>
      <section>
        <PokemonList>
          <Pokemon />
        </PokemonList>
      </section>
    </>
  )
}