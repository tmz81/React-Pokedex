import { Pokemon } from "../components/Pokemon";
import { Header, PokemonList, Title } from "../styles/home";

export function Home() {
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