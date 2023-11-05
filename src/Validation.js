class Validation {
  static hasDuplication([...numbers]) {
    const set = new Set();
    numbers.forEach((number) => {
      set.add(number);
    });

    if (numbers.length !== set.size) {
      return true;
    }

    return false;
  }
}
export default Validation;
