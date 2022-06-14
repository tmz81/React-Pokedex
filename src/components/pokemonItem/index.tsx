import { useCallback } from "react";
import { Container, Header, Index, Section } from "./styles";

interface PokemonItemProps {
  pokemon: Pokemon;
  sprite: string;
}

interface Pokemon {
  id: number;
  name: string;
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

export function PokemonItem({ pokemon, sprite }: PokemonItemProps) {
  const catchPokemons = useCallback((name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }, []);
  
  return (
    <Container className={`${pokemon.types[0].type.name}-type`}>
      <Header nameLength={pokemon.name.length}>
        <h3>{catchPokemons(pokemon.name)}</h3>
        <Index>#{`${pokemon.id}`}</Index>
      </Header>
      <Section sprites={sprite}>
        <ul>
          {pokemon.types.map(type => (
            <li key={type.slot}>{catchPokemons(type.type.name)}</li>
          ))}
        </ul>
        <div id="pokemon_image"/>
      </Section>
    </Container>
  )
}