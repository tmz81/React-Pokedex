import { createContext, useCallback, useContext } from "react"
import { api } from "../services/api"

interface PokemonContextData {
  getPokemonList: () => void;
}

interface PokemonProviderProps {
  children: React.ReactNode;
}

function usePokemon(): PokemonContextData {
  const context = useContext(PokemonContext);

  if (!context) throw new Error("usePokemon must be used within a PokemonProvider");

  return context;
}

const PokemonContext = createContext<PokemonContextData>({} as PokemonContextData);

const PokemonProvider = (props: PokemonProviderProps)  =>{
  const getPokemonList = useCallback(async () => {
    if (!localStorage.getItem('pokedex')) {
      const { data } = await Promise.resolve(api.get('pokemon?limit=250'));
      const pokemonList = data.results;
      localStorage.setItem(
        'pokedex',
        JSON.stringify(pokemonList),
      );
    }
  }, []);


  return (
    <PokemonContext.Provider value={{ getPokemonList }}>
      {props.children}
    </PokemonContext.Provider>
  )

}

export { PokemonProvider, usePokemon };