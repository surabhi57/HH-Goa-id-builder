const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const createBuilderId = (reserved: Set<string>): string => {
  let value = '';
  do {
    value = `${Math.floor(100 + Math.random() * 900)}${Array.from({ length: 2 }, () => LETTERS[Math.floor(Math.random() * LETTERS.length)]).join('')}`;
  } while (reserved.has(value));
  return value;
};
