import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
} from "react";
import { api } from "../services/api";

interface PokemonContextData {
  List: () => void;
}

const PokemonContext = createContext<PokemonContextData | undefined>(undefined);

function usePokemon(): PokemonContextData {
  const context = useContext(PokemonContext);

  if (!context) {
    throw new Error("usePokemon must be used within a PokemonProvider");
  }

  return context;
}

interface PokemonProviderProps {
  children: ReactNode;
}

const PokemonProvider: React.FC<PokemonProviderProps> = ({ children }) => {
  const List = useCallback(async () => {
    if (!localStorage.getItem("pokedex")) {
      const { data } = await api.get("pokemon?limit=250");
      const pokemonList = data.results;
      localStorage.setItem("pokedex", JSON.stringify(pokemonList));
    }
  }, []);

  useEffect(() => {
    List();
  }, [List]);

  return (
    <PokemonContext.Provider value={{ List }}>
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonProvider, usePokemon };
