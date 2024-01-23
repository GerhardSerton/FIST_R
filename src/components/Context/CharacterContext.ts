import { createContext, useContext } from "react";
import Character from "../../types/character";

export const CharacterContext = createContext<Character>(undefined);

// Call on child components that need access to the character data
export function useCharacterContext() {
  return useContext(CharacterContext);
}
