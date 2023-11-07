
export const isNumber = (amount) => {
  if (isNaN(amount)) throw new Error(NOT_NUMBER_ERROR_MESSAGE);
  return Number(amount);
};

export const isDuplicate = (lottoArray) => {
  if (new Set(lottoArray).size !== SIX_NUMBERS)
    throw new Error(NOT_ALLOWED_DUPLICATED_NUMBERS);
};

export const isInteger = (numbers) => {
  if (numbers.some((number) => !Number.isInteger(number)))
    throw new Error(NOT_AVAILABLE_NUMBER_ERROR_MESSAGE);
};

export const isAvailableAmountNumber = (amount) => {
  if (amount < THOUSAND || amount % THOUSAND)
    throw new Error(NOT_AVAILABLE_NUMBER_ERROR_MESSAGE);
};

export const isAvailableNumber = (amount, firstNumber, lastNumber) => {
  if (amount < firstNumber || amount > lastNumber)
    throw new Error(NOT_AVAILABLE_NUMBER_ERROR_MESSAGE);
};

export const isAvailableBonusNumber = (winningNumberArray, bonusNumber) => {
  if (winningNumberArray.includes(bonusNumber))
    throw new Error(NOT_AVAILABLE_NUMBER_ERROR_MESSAGE);
};

export const changeStringToNumbers = (winningNumbersStringArray) => {
  return winningNumbersStringArray.map((value) => isNumber(value));
};

export const hasComma = (winningNumbers) => {
  if (!winningNumbers.includes(COMMA))
    throw new Error(NOT_HAS_COMMA_ERROR_MESSAGE);
};

