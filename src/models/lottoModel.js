const lottoModel = {
  convertToNumber(answer) {
    const numbers = answer.split(',').map((string) => Number(string));

    return numbers;
  },

  getLastIndex(numbers, number) {
    const lastIndex = numbers.lastIndexOf(number);

    return lastIndex;
  },
};

export default lottoModel;
