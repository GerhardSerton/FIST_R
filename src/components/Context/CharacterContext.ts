import { createContext, useContext } from "react";
import Character from "../../types/character";

export interface ICharacterContext {
  character: Character;
  setCharacter: (c: Character) => void;
}

export const CharacterContext = createContext<ICharacterContext>(undefined);

// Call on child components that need access to the character data
export function useCharacterContext() {
  return useContext(CharacterContext);
}
