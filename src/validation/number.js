import { ERROR_MESSAGE } from "../constants/error";

export const getValidatedNumbers = (numbers) => {
  validateNumbers(numbers);
  return numbers.map((number) => {
    const N = +number;
    validateNumber(N);
    return N;
  });
};
export const getValidatedNumber = (number) => {
  const N = +number;

  validateNumber(N);

  return N;
};

const validateNumber = (N) => {
  if (isNaN(N)) throw new Error(ERROR_MESSAGE.MONEY_ISNAN);
  if (N < 1 || N > 45) throw new Error(ERROR_MESSAGE.LOTTO_RANGE);
  if (Math.floor(N) !== N) throw new Error(ERROR_MESSAGE.DECIMAL);
};

const validateNumbers = (numbers) => {
  if (numbers.length !== 6) throw new Error(ERROR_MESSAGE.NUMBER6);
  if (new Set(numbers).size !== numbers.length)
    throw new Error(ERROR_MESSAGE.OVERLAP);
};
