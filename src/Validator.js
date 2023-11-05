class Validator {
  isEmpty(input) {
    return input === "";
  }
  isCorrectCost(input) {
    const numberedInput = Number(input);
    return isNaN(numberedInput) || Number(numberedInput) % 1000 !== 0;
  }
}

export default Validator;
