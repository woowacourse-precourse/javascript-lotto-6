import { Console } from '@woowacourse/mission-utils';

import Game from './Game.js';
import {
  validateAmountInput,
  validateWinningInput,
  validateBonusInput,
} from './util/validateInput.js';
import { MESSAGES, RANK, TICKET_PRICE } from './util/constants.js';

class App {
  async play() {
    try {
      const amount = await this.getAmountInput();
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
    Console.print('\n당첨 통계');
    Console.print('---');

    for (let i = 5; i >= 1; i--) {
      Console.print(MESSAGES.OUTPUT_RESULT_DETAILS(i, result[RANK[i]]));
    }
  }
}

export default App;
