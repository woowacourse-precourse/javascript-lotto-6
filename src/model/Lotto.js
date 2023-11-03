import { LOTTO } from "../constants/lotto.js";
import IncorrectLottoCountError from "../error/IncorrectLottoCountError.js";
import IncorrectLottoNumberError from "../error/IncorrectLottoNumberError.js";
import DuplicateNumbersError from "../error/DuplicateNumbersError.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    // 로또 번호의 개수가 LOTTO.MAX_COUNT와 다르면 IncorrectLottoCountError
    if (numbers.length !== LOTTO.MAX_COUNT) {
      throw new IncorrectLottoCountError();
    }

    // LOTTO.MIN_NUMBER ~ LOTTO.MAX_NUMBER 사이의 숫자가 아니면 IncorrectLottoNumberError
    if (numbers.some((number) => !this.#between(number, LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER))) {
      throw new IncorrectLottoNumberError();
    }

    // 로또 번호가 중복된 값을 가지면 DuplicateNumbersError
    if (numbers.some((number, index) => numbers.includes(number, index + 1))) {
      throw new DuplicateNumbersError();
    }
  }

  #between(val, start, end) {
    return start <= val && val <= end;
  }

  /**
   * 정답 번호와 일치하는 개수 리턴
   * @param {number[]} answerNumbers
   * @param {number} bonusNumber
   * @returns {[number, boolean]}
   */
  getMatchCount(answerNumbers, bonusNumber) {
    const matchLotto = answerNumbers.filter((number) => this.#numbers.includes(number)).length;
    const matchBonus = this.#numbers.includes(bonusNumber);
    return [matchLotto, matchBonus];
  }
}

export default Lotto;
