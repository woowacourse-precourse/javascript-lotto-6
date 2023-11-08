export const ascendingSortNumbers = (array) => [...array].sort((a, b) => a - b);

export const arrayWinningNumbers = (input) =>
  input.split(',').map((value) => value.trim());

export const changeType = (input) => input.map((str) => Number(str));
