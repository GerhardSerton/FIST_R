// trait and role structure is based on the fist json data
// in the future it might be nice to rework it a bit so improve interactivity
export interface Trait {
  Number: number,
  Name: string,
  Effect: string,
  Item: string,
  Stat: string,
}

export interface Role {
  Number: number,
  Name: string,
  Text: string,
}

export interface Attributes {
  forceful: number,
  tactical: number,
  creative: number,
  reflexive: number,
}

export default interface Character {
  pronouns: string,
  name: string,
  role: Role,
  traits: Trait[],
  attributes: Attributes,
  inventory: string[],
  armor: number,
  hp: number,
  maxHp: number,
  warDice: number,
}