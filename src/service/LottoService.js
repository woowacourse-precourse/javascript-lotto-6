import { BRACKET, DIVIDER } from '../constants/Symbol.js';
import LottoGame from '../model/LottoGame.js';
import LottoResultCalculator from '../model/LottoResultCalculator.js';

export default class LottoService {
  /**
   * @type {LottoGame}
   */
  #lottoGame;

  /**
   * @constructor
   * @param {string} seedMoney
   */
  constructor(seedMoney) {
    this.#lottoGame = new LottoGame(seedMoney);
  }

  /**
   * @public
   * @returns {{lottoAmount: number, lottoList: string[]}}
   */
  getLottoList() {
    const { lottoList, lottoAmount } = this.#lottoGame.getLottoes();

    return {
      lottoList: Array.from(
        lottoList,
        (lotto) =>
          `${BRACKET.open}${lotto.getLottoNumbers().join(DIVIDER.spaceComma)}${
            BRACKET.close
          }`
      ),
      lottoAmount,
    };
  }

  /**
   * @public
   * @param {number[]} mainNumbers
   * @param {number} bonusNumber
   * @returns {{lottoResults: {prizeAmount: number[], prizeTotal: number}, lottoAmount: *}}
   */
  getCompareResults(mainNumbers, bonusNumber) {
    const { lottoList, lottoAmount } = this.#lottoGame.getLottoes();
    const lottoResultCalculator = new LottoResultCalculator();
    const matchList = lottoList.map((lotto) =>
      lotto.compare(mainNumbers, bonusNumber)
    );

    return {
      lottoResults: lottoResultCalculator.calculateResults(
        matchList,
        mainNumbers,
        bonusNumber
      ),
      lottoAmount,
    };
  }
}
