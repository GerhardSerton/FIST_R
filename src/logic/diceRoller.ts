export function d6() {
  return Math.floor(Math.random() * 6) + 1;
}

export function d66() {
  return +`${d6()}${d6()}`;
}

export function d666() {
  return +`${d6()}${d6()}${d6()}`;
}

export function d6n(n: number) {
  let roll = "";
  for (let i = 0; i < n; i++) {
    roll = `${roll}${d6()}`;
  }
  return +roll;
}
