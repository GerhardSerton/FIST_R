import { adjectives } from "../data/adjectives";
import { adverbs } from "../data/adverbs";
import { femmeNames, mascNames, names } from "../data/names";
import { nouns } from "../data/nouns";
import { surnames } from "../data/surnames";

// problematic
export enum Gender {
  masc = "Man",
  femme = "Woman",
  enlightened = "Person",
}

enum NameType {
  name,
  noun,
}

export default function getName(opts?: { gender?: Gender; manSuffix?: boolean }) {
  const gender = opts?.gender ?? pickGender();
  // default 1% chance for "-man" suffix
  const manSuffix = opts?.manSuffix ?? Math.random() < 0.01;
  // slightly more likely to get a name
  return Math.random() < 0.4
    ? generateNounName(gender, manSuffix)
    : generateRegularName(gender, manSuffix);
}

export function pickGender() {
  const p = Math.random();
  if (p < 0.3) return Gender.masc;
  else if (p < 0.6) return Gender.femme;
  else return Gender.enlightened;
}

function generateNounName(gender: Gender, manSuffix: boolean) {
  const noun = pickNoun();
  const mononym = Math.random() < 0.08;
  if (mononym) {
    // 15% chance a mononym has "The" as a title
    return Math.random() < 0.15 ? `The ${noun}` : noun;
  }
  if (manSuffix) {
    return `${noun} ${gender}`;
  }
  const p = Math.random();
  if (p < 0.5) {
    // 50% chance for adj + noun
    return `${pickAdjective()} ${noun}`;
  } else if (p < 0.6) {
    // 10% for adverb + noun
    return `${pickAdverb()} ${noun}`;
  } else {
    return `${pickNoun()} ${noun}`;
  }
}

function generateRegularName(gender: Gender, manSuffix: boolean) {
  const mononym = Math.random() < 0.015;
  if (mononym) {
    return pickName(gender);
  }
  if (manSuffix) {
    return `${pickName(gender)} ${pickNoun()}man`;
  }
  return `${pickName(gender)} ${pickSurname()}`;
}

function pickNoun() {
  return pick(nouns);
}

function pickAdjective() {
  return pick(adjectives);
}

function pickAdverb() {
  return pick(adverbs);
}

function pickName(gender: Gender) {
  switch (gender) {
    case Gender.enlightened:
      return pick(names);
    case Gender.femme:
      return pick(femmeNames);
    case Gender.masc:
      return pick(mascNames);
  }
}

function pickSurname() {
  return pick(surnames);
}

function pick(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}
