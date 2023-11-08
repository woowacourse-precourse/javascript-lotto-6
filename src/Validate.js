class Validate {
  static isNumeric(input) {
    return /^[0-9]+$/.test(input);
  }
}

export default Validate;