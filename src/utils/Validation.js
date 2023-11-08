import LOTTO from '../constants/AboutLotto.js';

class Validation {
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor() {}

  static winningNumber(array) {
    return (
      array.length !== 6 ||
      isNaN(array.join('')) ||
      !array.every(
        (number) =>
          Number(number) >= LOTTO.MIN_NUMBER &&
          Number(number) <= LOTTO.MAX_NUMBER
      )
    );
  }

  static bonusNumber(string) {
    return (
      /\s/g.test(string) ||
      isNaN(string) ||
      Number(string) < LOTTO.MIN_NUMBER ||
      Number(string) > LOTTO.MAX_NUMBER
    );
  }

  static money(string) {
    return (
      isNaN(string) ||
      string[0] === '0' ||
      /\s/g.test(string) ||
      string[0] === '-' ||
      Number(string) < 1000
    );
  }

  static overlap(numbers) {
    return [...new Set(numbers)].length !== 6;
  }

  static stringContained(numbers) {
    return isNaN(numbers.join(''));
  }

  static inRange(numbers) {
    return !numbers.every(
      (number) => number >= LOTTO.MIN_NUMBER && number <= LOTTO.MAX_NUMBER
    );
  }
}

export default Validation;
