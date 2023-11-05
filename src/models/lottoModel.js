const lottoModel = {
  convertToNumber(answer) {
    const numbers = answer.map((string) => Number(string));

    return numbers;
  },
};

export default lottoModel;
