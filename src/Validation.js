const LOTTO_RANGE_MIN = 1;
const LOTTO_RANGE_MAX = 45;
class Validation {
  static hasDuplication([...numbers]) {
    const set = new Set(numbers);
    if (numbers.length !== set.size) {
      return true;
    }

    return false;
  }

  static hasProperRange([...numbers]) {
    return numbers
      .map(Number)
      .every(
        (number) => LOTTO_RANGE_MIN <= number && number <= LOTTO_RANGE_MAX
      );
  }
}
export default Validation;
