import Lotto from './Lotto';
import GameUtils from './GameUtils';
import { LOTTO_PRICE, WINNIG_PROFITS } from '../constants/Constants';
import Validation from '../validation/Validation';
import Utils from '../Utils';

class LottoGame {
  #lottos;

  #purchaseNumber;

  #purchaseAmount;

  constructor(purchaseAmount) {
    this.#lottos = [];
    this.#validate(purchaseAmount);
    this.#purchaseAmount = purchaseAmount;
    this.#purchaseNumber = purchaseAmount / LOTTO_PRICE;
    this.#getLotto();
    this.gameUtils = new GameUtils(this.#lottos);
  }

  // 구매금액 유효성 검사
  #validate(numbers) {
    Validation.validatepurchaseInput(numbers);
  }

  #getLotto() {
    for (let i = 0; i < this.#purchaseNumber; i += 1) {
      const LOTTO = new Lotto(Utils.generateRandomNumbers());
      this.#lottos.push(LOTTO);
    }
  }

  getLottoNumbers() {
    const LOTTO_NUMBERS = [];
    for (let i = 0; i < this.#lottos.length; i += 1) {
      LOTTO_NUMBERS.push(this.#lottos[i].getNumbers());
    }
    return LOTTO_NUMBERS;
  }

  getWinningStatus(winningNumbers, bonusNumber) {
    Validation.validateLottoNumbers(winningNumbers);
    Validation.validateBonusNumber(bonusNumber);
    const MATCHING_COUNT_ARR =
      this.gameUtils.matchingCountsWithArray(winningNumbers);
    const MATCHING_COUNT_OBJ = this.gameUtils.matchingCount(
      MATCHING_COUNT_ARR,
      bonusNumber,
    );
    const WINNING_STATUS =
      this.gameUtils.sameNumberToResult(MATCHING_COUNT_OBJ);
    return WINNING_STATUS;
  }

  calculateRateOfReturn(winnigStatus) {
    let sumProfit = 0;
    for (const winningNumber in winnigStatus) {
      sumProfit += WINNIG_PROFITS[winningNumber] * winnigStatus[winningNumber];
    }
    const RATE_OF_RETURN = ((sumProfit / this.#purchaseAmount) * 100).toFixed(
      1,
    );
    return RATE_OF_RETURN;
  }
}
export default LottoGame;
