import { Container, Header, Section } from "../styles/pokemon";

export function Pokemon() {
  return (
    <Container>
      <Header>
        <h3>Bulbasaur</h3>
      </Header>
      <Section>
        <ul>
          <li>Grass</li>
          <li>Poison</li>
        </ul>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur" />
      </Section>
    </Container>
  )
}