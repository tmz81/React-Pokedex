import GlobalStyle from "./styles/global";
import { PokemonProvider } from "./hooks/usePokemon";
import { Home } from "./pages/Home";

export function App() {
  return (
    <>
      <PokemonProvider>
        <Home />
      </PokemonProvider>
      <GlobalStyle />
    </>
  )
}