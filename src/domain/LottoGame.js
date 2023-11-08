import Lotto from './Lotto.js';
import GameUtils from './GameUtils.js';
import { LOTTO_PRICE, WINNIG_PROFITS } from '../Constants.js';
import Validation from '../validation/Validation.js';
import Utils from '../Utils.js';

class LottoGame {
  #lottos;
  #purchaseNumber;
  #purchaseAmount;

  constructor(purchaseAmount) {
    this.#lottos = [];
    this.#validate(purchaseAmount);
    this.#purchaseAmount = purchaseAmount;
    this.#purchaseNumber = purchaseAmount / LOTTO_PRICE;
    this.#issueLotto();
    this.gameUtils = new GameUtils(this.#lottos);
  }

  // 구매금액 검증
  #validate(numbers) {
    Validation.validatepurchaseInput(numbers);
  }

  // 구매 수 만큼 로또 발행
  #issueLotto() {
    for (let i = 0; i < this.#purchaseNumber; i++) {
      const LOTTO = new Lotto(Utils.generateRandomNumbers());
      this.#lottos.push(LOTTO);
    }
  }

  // 발행한 로또 번호들 반환
  getLottoNumbers() {
    const LOTTO_NUMBERS = [];
    for (let i = 0; i < this.#lottos.length; i++) {
      LOTTO_NUMBERS.push(this.#lottos[i].getNumbers());
    }
    return LOTTO_NUMBERS;
  }

  // 당첨 번호 및 보너스 번호를 로또 번호와 대조해보고 당첨 현황을 객체로 반환
  getWinningStatus(winningNumbers, bonusNumber) {
    Validation.validateLottoNumbers(winningNumbers);
    Validation.validateBonusNumber(bonusNumber);
    const MATCHING_COUNT_ARR = this.gameUtils.matchingCountsWithArr(winningNumbers);
    const MATCHING_COUNT_OBJ = this.gameUtils.matchingCountsWithObj(MATCHING_COUNT_ARR,bonusNumber);
    const WINNING_STATUS = this.gameUtils.processMatchingNumbersToResult(MATCHING_COUNT_OBJ);
    return WINNING_STATUS;
  }

  // 당첨 현황(winningStatus)과 구매금액(purchaseAmount)으로 수익률을 계산 및 반환
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
