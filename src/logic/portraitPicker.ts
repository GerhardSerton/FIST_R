import { d6 } from "./diceRoller";

export default function portraitPicker() {
  const rollDice = d6() - 1;
  return `assets/portraits/agent_${rollDice}.png`;
}
