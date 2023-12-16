import { CORRECT_NUMBER, RANK } from '../constants/Rule.js';

class Checker {
  #winningLottoNumbers;
  #bonusNumber;
  #userLottos;
  /**
   *
   * @param {Lotto} winningLotto
   * @param {BonusBall} bonusBall
   * @param {Lotto[]} userLottos
   */
  constructor(winningLotto, bonusBall, userLottos) {
    this.#winningLottoNumbers = winningLotto.getLottoNumbers();
    this.#bonusNumber = bonusBall.getNumber();
    this.#userLottos = userLottos;
  }
  /**
   * @param {number} number
   * @param {number} bonus
   * @returns  {"fifth"|"fourth"|"third"|"second"|"first"}
   */
  changeToRank(number, bonus) {
    if (number < 3) return;
    switch (number) {
      case 3:
        return CORRECT_NUMBER.three;
      case 4:
        return CORRECT_NUMBER.four;
      case 5:
        return bonus ? CORRECT_NUMBER.fiveAndBonus : CORRECT_NUMBER.fiveNoBonus;
      case 6:
        return CORRECT_NUMBER.six;
      default:
        break;
    }
  }
  /**
   *
   * @param {Lotto} lotto
   * @param {number[]} winningLottoNumbers
   * @param {number} bonusNumber
   */
  compareLotto(lotto, winningLottoNumbers, bonusNumber) {
    const lottoNumbers = lotto.getLottoNumbers();
    let numberOfCorrect = 0;
    let bonus = false;

    lottoNumbers.forEach((v) => {
      if (winningLottoNumbers.includes(v)) numberOfCorrect += 1;
      if (v === bonusNumber) bonus = true;
    });

    return this.changeToRank(numberOfCorrect, bonus);
  }
  /**
   *
   * @param {*} array
   * @param {*} value
   * @returns {number}
   */
  #getLength = (array, value) => array.filter((v) => v === value).length;
  /**
   * @param {string[]} array :  에시 ) ["three", "three","four"]
   */
  #getWinningResult = (array) => {
    return RANK.map((v) => ({
      rank: v,
      number: this.#getLength(array, v),
    }));
  };
  calculateWinningResult() {
    const rankArray = this.#userLottos.map((v) =>
      this.compareLotto(v, this.#winningLottoNumbers, this.#bonusNumber),
    );

    return this.#getWinningResult(rankArray);
  }
}

export default Checker;
