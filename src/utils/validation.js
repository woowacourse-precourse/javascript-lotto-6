
export const isNumber = (amount) => {
  if (isNaN(amount)) throw new Error(NOT_NUMBER_ERROR_MESSAGE);
  return Number(amount);
};
