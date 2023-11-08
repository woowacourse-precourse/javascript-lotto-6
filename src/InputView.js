import { Console } from '@woowacourse/mission-utils';
import { QUERY } from './LottoMessage.js';

class InputView {
  static #DELIMITER = ',';

  static async askPurchaseAmount() {
    const answer = await Console.readLineAsync(QUERY.purchaseAmount);
    return Number(answer);
  }

  static async askWinningNumbers() {
    const answer = await Console.readLineAsync(QUERY.winningNumbers);
    const winningNumbers = answer.split(InputView.#DELIMITER).map(Number);
    return winningNumbers;
  }

  static async askBonusNumber() {
    const answer = await Console.readLineAsync(QUERY.bonusNumber);
    return Number(answer);
  }
}

export default InputView;
