import Lotto from './Lotto.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

export default class Host {
  static async enrollWinningNumbers() {
    try {
      const winningNumbers = await InputView.getWinningNumbers();
      const lotto = new Lotto(winningNumbers);
      return { winningNumbers, lotto };
    } catch (error) {
      OutputView.printErrors(error);
      return Host.enrollWinningNumbers();
    }
  }

  static async enrollBonusNumber(winningNumbers) {
    try {
      const bonus = await InputView.getBonusNumber();
      if (winningNumbers.includes(bonus)) {
        throw new Error('[ERROR] 로또 번호와 중복된 수는 입력 불가합니다.');
      }
      if (bonus < 1 || bonus > 45) {
        throw new Error('[ERROR] 1-45 사이의 정수만 입력 가능합니다.');
      }
      if (!Number.isInteger(bonus)) {
        throw new Error('[ERROR] 1-45 사이의 정수만 입력 가능합니다.');
      }
      return bonus;
    } catch (error) {
      OutputView.printErrors(error);
      return Host.enrollBonusNumber(winningNumbers);
    }
  }
}
