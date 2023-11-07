import { Console } from '@woowacourse/mission-utils';

import Game, { RANK } from './Game.js';

export const MESSAGES = Object.freeze({
  INPUT_AMOUNT: '구입금액을 입력해 주세요.',
  INPUT_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.',
  INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.',

  OUTPUT_BUY_TICKETS: (num) => `${num}개를 구매했습니다.`,
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
      Console.print('[ERROR]');
      this.play();
    }
  }

  validateAmountInput(input) {
    if (input === '') {
      throw new Error('[ERROR] 입력값이 없습니다.');
    }

    if (isNaN(input)) {
      throw new Error('[ERROR] 숫자를 입력해주세요.');
    }

    if (input % 1000 !== 0 || input < 1000) {
      throw new Error('[ERROR] 1,000원 단위로 입력해주세요.');
    }
  }

  validateWinningInput(input) {
    if (input === '') {
      throw new Error('[ERROR] 입력값이 없습니다.');
    }

    const numbers = input.split(',');

    if (input.split(',').length !== 6) {
      throw new Error('[ERROR] 6개의 번호를 입력해주세요.');
    }

    if (new Set(numbers).size !== numbers.length) {
      throw new Error('[ERROR] 중복된 숫자가 있습니다.');
    }

    if (numbers.some((num) => num < 1 || num > 45)) {
      throw new Error('[ERROR] 1~45 사이의 숫자여야 합니다.');
    }
  }

  validateBonusInput(input, winningInfo) {
    if (winningInfo.split(',').includes(input)) {
      throw new Error('[ERROR] 당첨 번호에 이미 있는 숫자입니다.');
    }
  }

  async getAmountInput() {
    const amountInput = await Console.readLineAsync(MESSAGES.INPUT_AMOUNT);
    this.validateAmountInput(amountInput);

    return amountInput;
  }

  async getWinningInput() {
    const winningNumbersInput = await Console.readLineAsync(
      MESSAGES.INPUT_WINNING_NUMBERS
    );
    this.validateWinningInput(winningNumbersInput);

    const bonusNumberInput = await Console.readLineAsync(
      MESSAGES.INPUT_BONUS_NUMBER
    );
    this.validateBonusInput(bonusNumberInput, winningNumbersInput);

    return {
      winningNumbers: winningNumbersInput.split(',').map(Number),
      bonusNumber: Number(bonusNumberInput),
    };
  }
}

export default App;
