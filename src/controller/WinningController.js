import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import { ERROR_MESSEGE } from '../constant/messages.js';

class WinningController {
  async inputWinning() {
    let winningNumber;
    while (true) {
      try {
        winningNumber = await InputView.inputWinningNumber();
        this.#validateWinningNumber(winningNumber);
        break;
      } catch (error) {
        OutputView.printError(error.message);
      }
    }
    return winningNumber.split(',').map(Number);
  }

  #validateWinningNumber(winningNumber) {
    if (!winningNumber) {
      throw new Error(ERROR_MESSEGE.notInput);
    }

    const winningNumbers = winningNumber.split(',');

    if (winningNumbers.length !== 6) {
      throw new Error(ERROR_MESSEGE.notSixNumbers);
    }

    if (winningNumbers.some((number) => isNaN(number))) {
      throw new Error(ERROR_MESSEGE.notNumber);
    }

    if (winningNumbers.some((number) => number <= 0)) {
      throw new Error(ERROR_MESSEGE.notPositive);
    }

    if (winningNumbers.some((number) => number < 1 || number > 45)) {
      throw new Error(ERROR_MESSEGE.outOfRange);
    }

    if (this.#isDuplicates(winningNumbers)) {
      throw new Error(ERROR_MESSEGE.duplicates);
    }
  }

  #isDuplicates(array) {
    return new Set(array).size !== array.length;
  }
}

export default WinningController;
