import { createContext, useCallback, useContext } from "react"
import { api } from "../services/api"

interface PokemonContextData {
  List: () => void;
}

function usePokemon(): PokemonContextData {
  const context = useContext(PokemonContext);

  if (!context) {
    throw new Error("usePokemon must be used within a PokemonProvider");
  }

  return context;
}

const PokemonContext = createContext<PokemonContextData>({} as PokemonContextData);

const PokemonProvider: React.FC = ({children}: any)  =>{
  const List = useCallback(async () => {
    if (!localStorage.getItem('pokedex')) {
      const { data } = await Promise.resolve(api.get('pokemon?limit=250'));
      const List = data.results;
      localStorage.setItem('pokedex', JSON.stringify(List))
    }
  }, []);


  return (
    <PokemonContext.Provider value={{ List }}>
      {children}
    </PokemonContext.Provider>
  )

}

export { PokemonProvider, usePokemon };
