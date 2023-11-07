import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { validAmount, validBonusNumber } from './ValidationInput.js';

export class Input {
  async getAmount() {
    while (true) {
      try {
        const amount = await Console.readLineAsync(
          '구입금액을 입력해 주세요.\n'
        );
        validAmount(amount);
        return amount;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async getWinningNumber() {
    const winningNumberInput = await Console.readLineAsync(
      '\n당첨 번호를 입력해 주세요.\n'
    );
    const winningNumbers = winningNumberInput
      .split(',')
      .map((number) => Number(number.trim()));

    try {
      new Lotto(winningNumbers);
    } catch (error) {
      throw error;
    }
    return winningNumbers;
  }

  async getBonusNumber() {
    const bonusNumber = await Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n'
    );
    return Number(bonusNumber);
  }
}
