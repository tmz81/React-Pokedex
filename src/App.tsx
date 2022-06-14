import GlobalStyle from "./styles/global";
import { PokemonProvider } from "./hooks/usePokemon";
import { Home } from "./pages/home";

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