const lottoModel = {
  convertToNumber(answer) {
    const numbers = answer.split(',').map((string) => Number(string));

    return numbers;
  },
};

export default lottoModel;
