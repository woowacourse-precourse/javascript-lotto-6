import { Console } from '@woowacourse/mission-utils';
import Validator from './Validator.js';

class LottoMachine {
  #winningNumbers;
  #plusNumber;
  #winningDetailsCount = {
    FIRST: 0,
    SECOND: 0,
    THIRD: 0,
    FOURTH: 0,
    FIFTH: 0,
  };
  constructor() {
    this.Validator = new Validator();
  }

  async setWinningNumber() {
    const userInput = await Console.readLineAsync('당첨 번호를 입력해 주세요.');
    const winnigNumber = userInput.split(',').map(Number);
    if (this.Validator.isValidWinningNumbers(winnigNumber))
      this.#winningNumbers = winnigNumber;
  }

  async setPlusNumber() {
    const plusNumber =
      await Console.readLineAsync('보너스 번호를 입력해 주세요.');
    if (this.Validator.isValidBonusNumbers(this.#winningNumbers, plusNumber))
      this.#plusNumber = plusNumber;
  }

  checkLottoResult(lottoList) {
    lottoList.forEach(lottoObj => {
      const lotto = lottoObj.getLottoNumber();
      const matchedNumbersCount = this.checkWinningNumbers(lotto);
      const bonusNumberCount = this.checkBonusNumber(lotto);
      this.updateWinningDetailsCount(matchedNumbersCount, bonusNumberCount);
    });
    return this.#winningDetailsCount;
  }

  checkWinningNumbers(lotto) {
    return lotto.filter(item => this.#winningNumbers.includes(item)).length;
  }

  checkBonusNumber(lotto) {
    return lotto.includes(this.#plusNumber) ? 1 : 0;
  }

  updateWinningDetailsCount(matchedNumbersCount, bonusNumberCount) {
    if (matchedNumbersCount === 6) this.#winningDetailsCount.FIRST += 1;
    else if (matchedNumbersCount + bonusNumberCount === 6)
      this.#winningDetailsCount.SECOND += 1;
    else if (matchedNumbersCount + bonusNumberCount === 5)
      this.#winningDetailsCount.THIRD += 1;
    else if (matchedNumbersCount + bonusNumberCount === 4)
      this.#winningDetailsCount.FOURTH += 1;
    else if (matchedNumbersCount + bonusNumberCount === 3)
      this.#winningDetailsCount.FIFTH += 1;
  }
}

export default LottoMachine;
