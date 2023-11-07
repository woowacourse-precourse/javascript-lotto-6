const Convert = {
  convertToNumber(numberString) {
    return Number(numberString);
  },

  convertToList(numbersString) {
    return numbersString.split(',').map(numberString => Number(numberString.trim()));
  },
};

export default Convert;
