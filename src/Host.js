import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

export default class Host {
  #winningNumbers;

  constructor() {
    this.#winningNumbers = null;
  }

  async enrollWinningNumbers() {
    const user = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const winningNumbers = user
      .split(',')
      .map((num) => parseInt(num, 10))
      .sort((a, b) => a - b);
    this.#winningNumbers = winningNumbers;
    return this.#enrollLotto();
  }

  async getBonusNumber() {
    try {
      const user =
        await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
      const bonus = parseInt(user, 10);
      this.#validate(bonus, this.#winningNumbers);
      return bonus;
    } catch (error) {
      Console.print(error.message);
      return this.getBonusNumber(this.#winningNumbers);
    }
  }

  #validate(bonus) {
    if (!Number.isInteger(bonus) || bonus > 45 || bonus < 1) {
      throw new Error('[ERROR] 1~45 사이의 정수만 입력 가능합니다.');
    }
    if (this.#winningNumbers.includes(bonus)) {
      throw new Error('[ERROR] 보너스 번호는 로또 번호와 중복이 불가합니다.');
    }
  }

  #enrollLotto() {
    try {
      const lotto = new Lotto(this.#winningNumbers);
      return lotto;
    } catch (error) {
      Console.print(error.message);
      return this.enrollWinningNumbers();
    }
  }
}
