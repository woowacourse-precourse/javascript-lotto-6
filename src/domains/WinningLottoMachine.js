import getWinningNumbers from '../input/getWinningNumbers.js';
import getBonusNumber from '../input/getBonusNumber.js';

class WinningLottoMachine {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  static async machineStart() {
    const winningNumbers = await getWinningNumbers();
    const bonusNumber = await getBonusNumber(winningNumbers);

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
