class Validation {
  static hasDuplication([...numbers]) {
    const set = new Set(numbers);
    if (numbers.length !== set.size) {
      return true;
    }

    return false;
  }
}
export default Validation;
