import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from './constants/messages.js';

class WinningLottoMachine {
  #winningNumbers;
  #bonusNumber;

  async machineStart() {
    this.#winningNumbers = await this.#generateWinningNumbers();
    this.#bonusNumber = await this.#generateBonusNumber();
  }

  async #generateWinningNumbers() {
    const winningNumbers = (await Console.readLineAsync(INPUT_MESSAGES.winningNumbers)).split(',').map((number) => Number(number.trim()));
    winningNumbers.sort((a, b) => a - b);

    return winningNumbers;
  }
  async #generateBonusNumber() {
    const bonusNumber = Number(await Console.readLineAsync(INPUT_MESSAGES.bonusNumber));

    return bonusNumber;
  }

  get winningNumbers() {
    return this.#winningNumbers;
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }
}

export default WinningLottoMachine;
