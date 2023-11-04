import { readLineAsync, throwError } from '../utils/index.js';
import { ERROR_MESSAGE, MESSAGE, REGEX } from '../utils/constants.js';

class InputView {
  async inputAmount() {
    const input = await readLineAsync(MESSAGE.input_amount);

    const amount = Number(input);

    this.#isNotNumber(amount);

    return amount;
  }

  async inputWinningNumbers() {
    const input = await readLineAsync(MESSAGE.input_winning_numbers);

    const winningNumbers = input
      .split(REGEX.comma)
      .map((number) => Number(number));

    winningNumbers.forEach((number) => {
      this.#isNotNumber(number);
    });

    return winningNumbers;
  }

  async inputBonusNumber() {
    const input = await readLineAsync(MESSAGE.input_bonus_number);

    const bonusNumber = Number(input);

    this.#isNotNumber(bonusNumber);

    return bonusNumber;
  }

  #isNotNumber(value) {
    throwError(ERROR_MESSAGE.not_number, Number.isNaN(value));
  }
}

export default InputView;
