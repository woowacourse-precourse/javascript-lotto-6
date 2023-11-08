import LottoGameValidator from "../validation/LottoGameValidator.js";

const Validator = LottoGameValidator;

class Lotto {

  /** @type {Array<number>} : Lotto 번호 배열 */
  #numbers = null;

  /** @type {number} : 당첨번호 일치 숫자 개수 */
  #match = null;

  /** @type {boolean} : 보너스 번호 일치 여부 */
  #bonusMatch = null;

  /** @type {number} : 등수 (0 : 낙첨) */
  #prizeRank = null;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validator.validateLottoNumbers(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  setMatch(match) {
    this.#match = match;
  }

  getMatch() {
    return this.#match;
  }

  setBonusMatch(bonusMatch) {
    this.#bonusMatch = bonusMatch;
  }

  getBonusMatch() {
    return this.#bonusMatch;
  }

  setPrizeRank(prizeRank) {
    this.#prizeRank = prizeRank;
  }

  getPrizeRank() {
    return this.#prizeRank;
  }
}

export default Lotto;
