import { Random } from "@woowacourse/mission-utils";

import Lotto from "../Lotto.js";
import LOTTO from "../constants/lotto.js";
import validateNoRemaining from "../validators/lottoManager.js";
import WinningLotto from "../WinningLotto.js";
import ResultOfDrawLotto from "../ResultOfDrawLotto/index.js";

class LottoManager {
  /**
   * @type {number} 구입 금액
   */
  #amountToPurchase;

  /**
   * @type {Lotto[]} 발급한 로또들
   */
  #lottoes;

  /**
   * @type {WinningLotto} 당첨 로또
   */
  #winningLotto;

  /**
   * @type {ResultOfDrawLotto} 당첨 결과
   */
  #resultOfDrawLotto;

  /**
   * @description 로또 발급
   * @param {number} amountToPurchase
   * @returns {Lotto[]}
   */
  issueLottoes(amountToPurchase) {
    validateNoRemaining(amountToPurchase, LOTTO.price);

    this.#amountToPurchase = amountToPurchase;
    this.#lottoes = [];

    const numberOfLottoTickets = parseInt(amountToPurchase / LOTTO.price, 10);
    this.#generateLottoes(numberOfLottoTickets);

    return [...this.#lottoes];
  }

  /**
   * @description 당첨 로또 생성
   * @param {number[]} numbers
   * @param {number} bonusNumber
   */
  generateWinningLotto(numbers, bonusNumber) {
    this.#winningLotto = new WinningLotto(numbers, bonusNumber);
  }

  /**
   * @description 로또 추첨 결과 반환
   * @returns {ResultOfDrawLotto}
   */
  drawLottoes() {
    this.#resultOfDrawLotto = new ResultOfDrawLotto();

    this.#lottoes.forEach((lotto) => {
      this.#drawLotto(lotto);
    });

    return this.#resultOfDrawLotto;
  }

  /**
   * @description 로또 추첨 결과 수익률 반환
   * @returns {string}
   */
  calculateRateOfReturn() {
    const result = this.#resultOfDrawLotto.getResult();
    const keys = Object.keys(result);

    const totalPrizeMoney = keys.reduce(
      (accumulatedSum, key) =>
        accumulatedSum + LOTTO.prizeMoney[key] * result[key],
      0,
    );

    const rateOfReturn = (totalPrizeMoney / this.#amountToPurchase) * 100;

    return `${rateOfReturn.toFixed(1)}%`;
  }

  /**
   * @param {number} numberOfLottoTickets
   */
  #generateLottoes(numberOfLottoTickets) {
    while (this.#lottoes.length < numberOfLottoTickets) {
      const numbers = this.#generateLottoNumbers();
      this.#lottoes.push(new Lotto(numbers));
    }
  }

  /**
   * @returns {number[]}
   */
  #generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      LOTTO.range.startInclusive,
      LOTTO.range.endInclusive,
      LOTTO.length,
    ).sort((a, b) => a - b);
  }

  /**
   * @param {lotto} lotto
   */
  #drawLotto(lotto) {
    const count = this.#countMatchingNumber(lotto, this.#winningLotto);

    if (count === LOTTO.length - 1) {
      const isMatchBonus = this.#compareBonusNumber(lotto, this.#winningLotto);
      this.#resultOfDrawLotto.increaseResultOfDraw(count, isMatchBonus);
      return;
    }

    this.#resultOfDrawLotto.increaseResultOfDraw(count);
  }

  /**
   * @param {Lotto} lotto
   * @param {WinningLotto} winningLotto
   * @returns {number}
   */
  #countMatchingNumber(lotto, winningLotto) {
    const lottoNumbers = lotto.getNumbers();
    const winningLottoNumbers = winningLotto.getNumbers();

    const count = lottoNumbers.filter((number) =>
      winningLottoNumbers.includes(number),
    ).length;

    return count;
  }

  /**
   * @param {Lotto} lotto
   * @param {WinningLotto} winningLotto
   * @returns {boolean}
   */
  #compareBonusNumber(lotto, winningLotto) {
    const lottoNumbers = lotto.getNumbers();
    const bonusNumber = winningLotto.getBonusNumber();

    return lottoNumbers.includes(bonusNumber);
  }
}

export default LottoManager;
