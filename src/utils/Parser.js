const Parser = {
  commaSeparatedValuesToNumbers(value) {
    return value.split(',').map(number => Number(number.trim()));
  },

  valueToNumber(value) {
    return Number(value.trim());
  },  

  sort(value) {
    return value.sort((a, b) => a - b);
  },  

  toFixedOneDecimal(number) {
    return number.toFixed(1);
  },
};

export default Parser;