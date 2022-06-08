import styled from "styled-components";

export const Header = styled.header`
  margin-bottom: 1.875rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #000;
`;

export const PokemonList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.25rem;
`;