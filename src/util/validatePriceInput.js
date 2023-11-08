const isNumeric = (value) => {
  return /^[0-9]+$/.test(value);
};

const isGreaterThanOrEqual = (value, minValue) => {
  return value >= minValue;
};

const isDivisibleBy = (value, divisor) => {
  return value % divisor === 0;
};

const isWithinRange = (value, minValue, maxValue) => {
  return value >= minValue && value <= maxValue;
};

const validatePriceInput = (price) => {
  if (!isNumeric(price) || price.charAt(0) === "0") {
    return false;
  }
  price = parseInt(price);
  if (
    !isGreaterThanOrEqual(price, 1000) ||
    !isDivisibleBy(price, 1000) ||
    !isWithinRange(price, 1000, 100000)
  ) {
    return false;
  }
  return true;
};

export default validatePriceInput;
