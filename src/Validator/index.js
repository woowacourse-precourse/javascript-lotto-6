class Validator {
  static #isNaturalNumber(value) {
    const num = Number(value);

    if (!Number.isNaN(value) || !Number.isSafeInteger(num) || num <= 0) {
      return false;
    }
    return true;
  }
}

export default Validator;
