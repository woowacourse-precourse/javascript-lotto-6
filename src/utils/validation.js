
export const isNumber = (amount) => {
  if (isNaN(amount)) throw new Error(NOT_NUMBER_ERROR_MESSAGE);
  return Number(amount);
};

export const isDuplicate = (lottoArray) => {
  if (new Set(lottoArray).size !== SIX_NUMBERS)
    throw new Error(NOT_ALLOWED_DUPLICATED_NUMBERS);
};
