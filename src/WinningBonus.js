import { Console } from '@woowacourse/mission-utils';
import { CONFIG, ERROR_MESSAGE, INPUT_MESSAGE } from '../constants/constants';
import Lotto from './Lotto';

class WinningBonus {
  #winningNumber;
  #bonusNumber;

  /*
   * @returns {array} this.#winningNumber - 당첨 번호
   */
  async readWinning() {
    this.#winningNumber = await Console.readLineAsync(INPUT_MESSAGE.jackpot);
    const lotto = new Lotto(Array.from(this.#winningNumber.split(','), Number));
    this.#winningNumber = lotto.getLottoNumbers();

    return this.#winningNumber;
  }

  /*
   * @returns {number} Number(this.#bonusNumber) - 보너스 번호
   */
  async readBonus() {
    this.#bonusNumber = await Console.readLineAsync(INPUT_MESSAGE.bonus);
    this.validate(this.#winningNumber, this.#bonusNumber);

    return Number(this.#bonusNumber);
  }

  /*
   * @param {array} winningNumber - 당첨 번호
   * @param {string} bonusNumber - 보너스 번호
   */
  validate(winningNumber, bonusNumber) {
    if (Number.isNaN(Number(bonusNumber))) {
      throw new Error(ERROR_MESSAGE.bonus.notNumber);
    }

    if (!Number.isInteger(Number(bonusNumber))) {
      throw new Error(ERROR_MESSAGE.bonus.notInt);
    }

    if (
      bonusNumber < CONFIG.range.minNumber ||
      bonusNumber > CONFIG.range.maxNumber
    ) {
      throw new Error(ERROR_MESSAGE.bonus.notRange);
    }

    if (winningNumber.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.bonus.notDifferent);
    }
  }
}

export default WinningBonus;
