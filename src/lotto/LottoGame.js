import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import GameUtils from './GameUtils.js';
import { LOTTO_PRICE, WINNIG_PROFITS } from '../Constants.js';
import Validation from '../validation/Validation.js';
class LottoGame {
  #lottos;
  #purchaseNumber;
  #purchaseAmount;

  constructor(purchaseAmount) {
    this.#lottos = [];
    Validation.validatepurchaseInput(purchaseAmount);
    this.#purchaseAmount = purchaseAmount;
    this.#purchaseNumber = purchaseAmount / LOTTO_PRICE;
    this.#issueLotto();
    this.gameUtils = new GameUtils(this.#lottos);
  }

  #issueLotto() {
    const gameUtils = new GameUtils();
    for (let i = 0; i < this.#purchaseNumber; i++) {
      const LOTTO = new Lotto(gameUtils.generateRandomNumbers());
      this.#lottos.push(LOTTO);
    }
  }

  getLottoNumbers() {
    const LOTTO_NUMBERS = [];
    for (let i = 0; i < this.#lottos.length; i++) {
      LOTTO_NUMBERS.push(this.#lottos[i].getNumbers());
    }
    return LOTTO_NUMBERS;
  }

  getWinningStatus(winningNumbers, bonusNumber) {
    Validation.validateLottoNumbers(winningNumbers);
    Validation.validateBonusNumber(bonusNumber);
    const MATCHING_COUNT_ARR = this.gameUtils.matchingCountsWithArr(winningNumbers);
    const MATCHING_COUNT_OBJ = this.gameUtils.matchingCountsWithObj(MATCHING_COUNT_ARR,bonusNumber);
    const WINNING_STATUS = this.gameUtils.processMatchingNumbersToResult(MATCHING_COUNT_OBJ);
    return WINNING_STATUS;
  }

  calculateRateOfReturn(winnigStatus) {
    let sumProfit = 0
    for (let winningNumber in winnigStatus) {
        sumProfit += WINNIG_PROFITS[winningNumber] * winnigStatus[winningNumber];
    }
    const RATE_OF_RETURN = ((sumProfit/this.#purchaseAmount)*100).toFixed(1);
    return RATE_OF_RETURN;
  }
}
export default LottoGame;
