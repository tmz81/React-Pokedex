import styled from "styled-components";
import LogoPokeAPI from "/pokeapi.png";

export const Header = styled.header`
  margin-bottom: 5rem;
`;

export const Logo = styled.div`
  background-image: url(${LogoPokeAPI});
  background-position-x: center;
  background-repeat: no-repeat;
  height: 8rem;
  margin-bottom: 2rem;
`;

export const PokemonList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.25rem;
  scroll-behavior: smooth;
  padding-top: 2rem;
`;