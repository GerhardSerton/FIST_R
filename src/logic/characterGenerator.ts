import Character, { Attributes, Role, Trait } from "../types/character";
import { d6, d66, d666 } from "./diceRoller";
import getName, { Gender, pickGender } from "./nameGenerator";

export default function generateCharacter(rolesData: Role[], traitsData: Trait[]): Character {
  const gender = pickGender();
  const pronouns = getPronouns(gender);
  const name = getName({
    gender,
  });
  const roleN = d66();
  const role = rolesData.find((r) => r.Number === roleN);

  let [trait1, trait2] = [d666(), d666()];
  while (trait1 === trait2) {
    trait2 = d666();
  }
  const traits = [
    traitsData.find((t) => t.Number === trait1),
    traitsData.find((t) => t.Number === trait2),
  ];

  const attributes: Attributes = {
    forceful: traits.reduce((v, t) => v + getAttributeModifier(t.Stat, "forceful"), 0),
    tactical: traits.reduce((v, t) => v + getAttributeModifier(t.Stat, "tactical"), 0),
    creative: traits.reduce((v, t) => v + getAttributeModifier(t.Stat, "creative"), 0),
    reflexive: traits.reduce((v, t) => v + getAttributeModifier(t.Stat, "reflexive"), 0),
  };

  let hp: number = 6;
  hp += traits.reduce((v, t) => v + getHPModifier(t.Stat), 0);

  const inventory = traits.map((t) => t.Item);

  // TODO
  const armor = 0;

  // TODO
  const warDice = 0;

  return {
    pronouns,
    name,
    role,
    traits,
    attributes,
    hp,
    maxHp: hp,
    inventory,
    armor,
    warDice,
  };
}

function getPronouns(gender: Gender) {
  switch (gender) {
    case Gender.masc:
      return "He/Him";
    case Gender.femme:
      return "She/Her";
    case Gender.enlightened:
    default:
      return "They/Them";
  }
}

// Ideally this would be in the data by default
function getAttributeModifier(text: string, attribute: keyof Attributes): number {
  if (text.toLowerCase().includes(attribute)) {
    return +text.substring(0, 2);
  }
  return 0;
}

// Hard coding? I hardly know her!
function getHPModifier(text: string): number {
  if (text.includes("MAX HP") && text.substring(text.length - 2) === "HP") {
    if (text.substring(0, 4) === "+1D6") {
      return d6();
    } else {
      return +text.substring(0, 2);
    }
  }
  return 0;
}
