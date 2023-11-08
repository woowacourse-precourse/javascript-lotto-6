import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

export default class Host {
  async getWinningNumbers() {
    const user = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    const winningNumbers = user
      .split(',')
      .map((num) => parseInt(num, 10))
      .sort((a, b) => a - b);
    return winningNumbers;
  }

  async getBonusNumber(winningNumbers) {
    try {
      const user = await Console.readLineAsync(
        '\n보너스 번호를 입력해 주세요.\n',
      );
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
      throw new Error('[ERROR] 1~45 사이의 정수만 입력 가능합니다.');
    }
    if (winningNumbers.includes(bonus)) {
      throw new Error('[ERROR] 보너스 번호는 로또 번호와 중복이 불가합니다.');
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
