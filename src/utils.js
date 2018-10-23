export const empty = value => value === "";

export const newId = () => Math.floor(Math.random() * (100000000 - 3 + 1)) + 3;
