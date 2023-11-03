import { readLineAsync, throwError } from '../utils/index.js';
import { ERROR_MESSAGE, LOTTO, MESSAGE } from '../utils/constants.js';

class InputView {
  async inputAmount() {
    const input = await readLineAsync(MESSAGE.input_amount);

    const amount = Number(input);

    this.#isNotNumber(amount);
    this.#isAmountUnit(amount);

    return amount;
  }

  async inputWinningNumbers() {
    const input = await readLineAsync(MESSAGE.input_winning_numbers);

    const winningNumbers = input.split(',').map((number) => Number(number));

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

  #isAmountUnit(amount) {
    throwError(ERROR_MESSAGE.amount_division, amount % LOTTO.amount_unit !== 0);
  }
}

export default InputView;
