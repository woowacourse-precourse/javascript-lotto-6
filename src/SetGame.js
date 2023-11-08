import { LOTTO_RULE, WINNING_PROFITS } from './Constants.js';
import Lotto from './Lotto.js';
import LottoUtils from './LottoUtils.js';
import Utils from './Utils.js';
import { Validation } from './Validation/Validation.js';

class SetGame {
  #lottos;
  #buyNumber;
  #buyAmount;

  constructor(buyAmount) {
    this.#lottos = [];
    this.#validate(buyAmount);
    this.#buyAmount = buyAmount;
    this.#buyNumber - buyAmount / LOTTO_RULE.UNIT;
    this.#issueLotto();
    this.lottoUtils = new LottoUtils(this.#lottos);
  }
  // 구매금액 검증
  #validate(numbers) {
    Validation.validateBuyInput(numbers);
  }
  // 로또 발행하여 배열로 저장
  #issueLotto() {
    for (let i = 0; i < this.#buyAmount; i++) {
      const lotto = new Lotto(Utils.generateRandomNumbers());
      this.#lottos.push(lotto);
    }
  }

  // 당첨번호 배열로 저장
  getLottoNumbers() {
    const lottoList = [];
    for (let i = 0; i < this.#lottos.length; i++) {
      lottoList.push(this.#lottos[i].getNumbers());
    }
    return lottoList;
  }

  // 당첨 번호 및 보너스 번호 비교 후, 당첨현황 확인
  getWinningStatus(winningNumbers, bonusNumber) {
    Validation.validateLottoNumbers(winningNumbers);
    Validation.validateBonusNumber(bonusNumber);
    const matchingArray = this.lottoUtils.matchingCountToArray(winningNumbers);
    const matchingObject = this.lottoUtils.matchingCountToObject(
      matchingArray,
      bonusNumber,
    );
    const winningStatus = this.lottoUtils.checkGameResult(matchingObject);

    return winningStatus;
  }
  // 수익률 계산
  calcProfit(winningStatus) {
    let sumProfit = 0;
    for (let i in winningStatus) {
      sumProfit += WINNING_PROFITS[i] * winningStatus[i];
    }
    const profit = ((sumProfit / this.#buyAmount) * 100).toFixed(1);
    return profit;
  }
}

export default SetGame;
