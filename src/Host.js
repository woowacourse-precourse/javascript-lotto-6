import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { CONSOLE_MASSAGE, ERROR_MESSAGE } from './constants/constant.js';

export default class Host {
  async getWinningNumbers() {
    const user = await Console.readLineAsync(CONSOLE_MASSAGE.WINNING_NUMBERS);
    const winningNumbers = user
      .split(',')
      .map((num) => parseInt(num, 10))
      .sort((a, b) => a - b);
    return winningNumbers;
  }

  async getBonusNumber(winningNumbers) {
    try {
      const user = await Console.readLineAsync(CONSOLE_MASSAGE.BONUS_NUMBER);
      const bonus = parseInt(user, 10);
      this.#validate(bonus, winningNumbers);
      return bonus;
    } catch (error) {
      Console.print(error.message);
      return this.getBonusNumber(winningNumbers);
    }
  }

  #validate(bonus, winningNumbers) {
    if (!Number.isInteger(bonus) || bonus > 45 || bonus < 1) {
      throw new Error(ERROR_MESSAGE.FROM_ONE_TO_FORTYFIVE_ONLY);
    }
    if (winningNumbers.includes(bonus)) {
      throw new Error(ERROR_MESSAGE.DIFFERENT_BONUS);
    }
  }

  async enrollLotto(winningNumbers) {
    try {
      const lotto = new Lotto(winningNumbers);
      return lotto;
    } catch (error) {
      Console.print(error.message);
      const newWinningNumbers = await this.getWinningNumbers();
      return this.enrollLotto(newWinningNumbers);
    }
  }
}
