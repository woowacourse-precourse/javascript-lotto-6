import { LottoValidate } from "../utils/validate.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  /**
   * numbers 파라미터 유효성 체크
   * @param {number[]} numbers
   */
  #validate(numbers) {
    LottoValidate.checkAllLottoNumbers(numbers);
  }

  /**
   * 정답 번호와 일치하는 개수 리턴
   * @param {number[]} answerNumbers
   * @param {number[]} bonusNumbers
   * @returns {[number, number]}
   */
  getMatchCount(answerNumbers, bonusNumbers) {
    const matchLotto = answerNumbers.filter((number) => this.#numbers.includes(number)).length;
    const matchBonus = bonusNumbers.filter((number) => this.#numbers.includes(number)).length;

    return { matchLotto, matchBonus };
  }
}

export default Lotto;
