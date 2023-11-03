class Validator {
  static checkArrayLength(array, number) {
    return array.length === number;
  }

  static checkArrayForDuplicate(array) {
    return new Set(array).size !== array.length;
  }
}

export default Validator;
