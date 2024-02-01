import Character, { Attributes, Item, Role, Trait } from "../types/character";
import { d66, d666, d6n } from "./diceRoller";
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
    forceful: traits.reduce((v, t) => v + (t.Forceful ?? 0), 0),
    tactical: traits.reduce((v, t) => v + (t.Tactical ?? 0), 0),
    creative: traits.reduce((v, t) => v + (t.Creative ?? 0), 0),
    reflexive: traits.reduce((v, t) => v + (t.Reflexive ?? 0), 0),
  };

  let hp: number = 6;
  hp += traits.reduce((v, t) => v + parseDieText(t.MaxHP), 0);

  const inventory: Item[] = [];
  traits.forEach(({ Item }) => {
    if (typeof Item === "string") inventory.push({ Text: Item });
    else if (Array.isArray(Item)) Item.forEach((i) => inventory.push(i));
    else inventory.push(Item);
  });
  inventory.forEach((item) => {
    if (item.Charges != undefined) {
      item.MaxCharges = item.Charges;
    }
  });

  const armor = traits.reduce((v, t) => v + (t.Armor ?? 0), 0);
  const warDice = traits.reduce((v, t) => v + (t.WarDice ?? 0), 0);

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

function parseDieText(text: string | number | undefined): number {
  if (!text || typeof text === "number" || !text.includes("d")) {
    return 0;
  }
  let val = 0;
  const dieIndex = text.indexOf("d");
  const modIndex = text.indexOf("+");
  const diceCount = +text.substring(0, dieIndex);
  const dieSize = modIndex - dieIndex;
  const modifier = modIndex >= 0 ? +text.substring(modIndex + 1) : 0;
  for (let i = 0; i < diceCount; i++) {
    val += d6n(dieSize);
  }
  return val + modifier;
}
