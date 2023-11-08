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
      const enteredAmount = await this.getAmountInput();
      const game = new Game(enteredAmount);
      game.getLottoTickets();
      game.printTickets();

      const enteredWinningInfo = await this.getWinningInput();
      game.draw(enteredWinningInfo);

      const drawInfo = game.drawInfo;
      const profitRate = game.getProfitRate();
      this.printResult(drawInfo, profitRate);
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

  printResult(drawResult, profitRate) {
    Console.print(MESSAGES.OUTPUT_RESULT_TITLE);

    for (let i = 5; i >= 1; i--) {
      Console.print(MESSAGES.OUTPUT_RESULT_DETAILS(i, drawResult[RANK[i]]));
    }

    Console.print(MESSAGES.OUTPUT_RETURN(profitRate.toFixed(1)));
  }
}

export default App;
