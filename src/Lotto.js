import LottoValidator from "./validator/LottoValidator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    LottoValidator.isValidNumbers(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  isIncludeBonus(bonus) {
    if (this.#numbers.includes(bonus)) {
      return true
    }
    return false;
  }

  /**
   * 두 로또 객체의 숫자를 비교하여
   * 일치하는 숫자의 개수를 반환하는 메소드
   */
  static getMatchCount(win, purchase) {
    const matchNumbers = win.getNumbers().filter((number) => {
      return purchase.getNumbers().includes(number);
    });
    return matchNumbers.length;
  }
}

export default Lotto;
