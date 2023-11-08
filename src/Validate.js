class Validate {
  static isNumeric(input) {
    return /^[0-9]+$/.test(input);
  }

  static isMultipleOf1000(input) {
    return +input % 1000 === 0;
  }
}

export default Validate;