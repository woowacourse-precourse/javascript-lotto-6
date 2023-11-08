class Validate {
  static isNumeric(input) {
    return /^[0-9]+$/.test(input);
  }

  static isMultipleOf1000(input) {
    return +input % 1000 === 0;
  }

  static isLottoNumbersFormat(winningNumbers) {
    if (winningNumbers.length !== 6) {
      return false;
    }
    const set = new Set(winningNumbers);
    return set.size === winningNumbers.length;
  }
}

export default Validate;
