import { ERROR_MESSAGE } from "../constants/error.js";

export const validateBonusNumber = (number, prizeNumbers) => {
  validateNumber(number);

  if (prizeNumbers.includes(+number)) throw new Error(ERROR_MESSAGE.OVERLAP);
};

export const validateNumber = (number) => {
  const N = +number;

  if (isNaN(N)) throw new Error(ERROR_MESSAGE.MONEY_ISNAN);
  if (N < 1 || N > 45) throw new Error(ERROR_MESSAGE.LOTTO_RANGE);
  if (Math.floor(N) !== N) throw new Error(ERROR_MESSAGE.DECIMAL);
};

export const validateNumbers = (numbers) => {
  if (typeof numbers === "string") {
    numbers = numbers.split(",");
  }

  if (numbers.length !== 6) throw new Error(ERROR_MESSAGE.NUMBER6);
  if (new Set(numbers).size !== numbers.length)
    throw new Error(ERROR_MESSAGE.OVERLAP);

  numbers.forEach((number) => {
    const N = +number;
    validateNumber(N);
  });
};
