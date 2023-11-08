import LottoValidator from "./validator/LottoValidator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    LottoValidator.isSixLength(numbers);
    LottoValidator.isAllPositiveInt(numbers);
    LottoValidator.isAllValidRange(numbers);
    LottoValidator.isDuplicated(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  // 두 로또 객체를 비교하여 일치하는 숫자의 개수를 반환
  static getMatchCount(win, player) {
    const matchNumbers = win.getNumbers().filter((number) => {
      return player.getNumbers().includes(number);
    });
    return matchNumbers.length;
  }
}

export default Lotto;
