import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from './constants/messages.js';

class WinningLottoMachine {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  static async machineStart() {
    const winningNumbers = (await Console.readLineAsync(INPUT_MESSAGES.winningNumbers)).split(',').map((number) => Number(number.trim()));
    winningNumbers.sort((a, b) => a - b);

    const bonusNumber = Number(await Console.readLineAsync(INPUT_MESSAGES.bonusNumber));

    return new WinningLottoMachine(winningNumbers, bonusNumber);
  }

  get winningNumbers() {
    return this.#winningNumbers;
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }
}

export default WinningLottoMachine;
