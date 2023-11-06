const DIVISOR = 1000;
const ZERO = 0;

const isValidCost = (costString) => {
  const isNumber = /^[0-9]+$/.test(costString);
  const isDividedUp = Number(costString) % DIVISOR === ZERO;
  const isValid = isNumber && isDividedUp;

  return isValid;
};

export default isValidCost;
