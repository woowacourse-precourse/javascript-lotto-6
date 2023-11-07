import { Console } from '@woowacourse/mission-utils';

import Game, { RANK } from './Game.js';
import {
  validateAmountInput,
  validateWinningInput,
  validateBonusInput,
} from './util/validateInput.js';

export const MESSAGES = Object.freeze({
  INPUT_AMOUNT: '구입금액을 입력해 주세요.\n',
  INPUT_WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',

  OUTPUT_BUY_TICKETS: (num) => `\n${num}개를 구매했습니다.`,
  OUTPUT_RETURN: (num) => `총 수익률은 ${num}%입니다.`,
});

class App {
  async play() {
    try {
      const amount = await this.getAmountInput();
      const ticketNumber = amount / 1000;

      const game = new Game(amount);
      game.getLottoTickets();
      game.printTickets();

      const winningInfo = await this.getWinningInput();

      game.draw(winningInfo);
      this.printResult(game.drawInfo);

      const totalReturn = game.getReturn();

      Console.print(
        MESSAGES.OUTPUT_RETURN(((totalReturn / amount) * 100).toFixed(1))
      );
    } catch (err) {
      Console.print('[ERROR]\n');
      this.play();
    }
  }

  async getAmountInput() {
    const amountInput = await Console.readLineAsync(MESSAGES.INPUT_AMOUNT);
    validateAmountInput(amountInput);

    return amountInput;
  }

  async getWinningInput() {
    const winningNumbersInput = await Console.readLineAsync(
      MESSAGES.INPUT_WINNING_NUMBERS
    );
    validateWinningInput(winningNumbersInput);

    const bonusNumberInput = await Console.readLineAsync(
      MESSAGES.INPUT_BONUS_NUMBER
    );
    validateBonusInput(bonusNumberInput, winningNumbersInput);

    return {
      winningNumbers: winningNumbersInput.split(',').map(Number),
      bonusNumber: Number(bonusNumberInput),
    };
  }

  printResult(result) {
    const values = Object.values(result);

    Console.print('\n당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${values[0].count}개`);
    Console.print(`4개 일치 (50,000원) - ${values[1].count}개`);
    Console.print(`5개 일치 (1,500,000원) - ${values[2].count}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${values[3].count}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${values[4].count}개`);
  }
}

export default App;
