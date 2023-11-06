import Lotto from '../Lotto.js';

import { throwError } from '../utils/index.js';
import { ERROR_MESSAGE } from '../utils/constants.js';

class LottoManageModel {
  /**
   * @description 당첨 번호 - 6개의 숫자로 이루어진 배열이다.
   * @example [1, 2, 3, 4, 5, 6]
   */
  #winningNumbers;

  /**
   * @description 보너스 번호 - 당첨 번호와 중복되지 않아야 한다.
   * @example 7
   */
  #bonusNumber;

  getWinningNumbers() {
    return this.#winningNumbers.getNumbers();
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  setWinningNumbers(winningNumbers) {
    this.#winningNumbers = new Lotto(winningNumbers);
  }

  setBonusNumber(bonusNumber) {
    this.#isBonusNumberDuplicate(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  returnMatchCountByLotto(lotto) {
    const matchCount = this.#matchByWinningNumbers(lotto);
    const bonusCount = this.#matchByBonusNumber(lotto);

    return [matchCount, bonusCount];
  }

  #matchByWinningNumbers(lotto) {
    return this.getWinningNumbers().filter((number) => lotto.includes(number))
      .length;
  }

  #matchByBonusNumber(lotto) {
    return Number(lotto.includes(this.#bonusNumber));
  }

  #isBonusNumberDuplicate(bonusNumber) {
    throwError(
      ERROR_MESSAGE.bonus_number_duplicate,
      this.getWinningNumbers().includes(bonusNumber),
    );
  }
}

export default LottoManageModel;
