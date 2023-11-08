import { NUMBER } from "./Constans";

const isDivisibleByThousand = (purchaseAmount) => {
  return purchaseAmount % 1000 === 0;
};

const isNumber = (purchaseAmount) => {
  return !isNaN(Number(purchaseAmount));
};

const isNumberLengthValid = (numbers) => {
  const numberArray = numbers.toString().split(",");
  const uniqueNumbers = [...new Set(numberArray)];
  return uniqueNumbers.length === NUMBER.SIX;
};

const isNumbersInRange = (numbers) => {
  return numbers.every((number) => isNumberInRange(number));
};

const isNumberInRange = (number) => {
  return number >= NUMBER.ONE && number <= NUMBER.FORTY_FIVE;
};

const isBonusNumberIncluded = (winningNumbers, bonusNumber) => {
  return winningNumbers.includes(bonusNumber);
};

export {
  isDivisibleByThousand,
  isNumber,
  isNumberInRange,
  isNumberLengthValid,
  isNumbersInRange,
  isBonusNumberIncluded,
};
