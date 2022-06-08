import { Container, Header, Index, Section } from "../styles/pokemon";

export function Pokemon() {
  return (
    <Container>
      <Header>
        <h3>Bulbasaur</h3>
        <Index>#001</Index>
      </Header>
      <Section>
        <ul>
          <li>Grass</li>
          <li>Poison</li>
        </ul>
        <div />
      </Section>
    </Container>
  )
}