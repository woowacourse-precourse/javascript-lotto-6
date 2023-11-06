import { readLineAsync, throwError } from '../utils/index.js';
import { ERROR_MESSAGE, MESSAGE, REGEX } from '../utils/constants.js';

class InputView {
  async inputAmount() {
    const input = await readLineAsync(MESSAGE.input_amount);

    this.#isEmpty(input);
    this.#isNotNumber(input);

    const amount = Number(input);

    return amount;
  }

  async inputWinningNumbers() {
    const input = await readLineAsync(MESSAGE.input_winning_numbers);

    const splittedInput = input.split(REGEX.comma);

    splittedInput.forEach((number) => {
      this.#isEmpty(number);
      this.#isNotNumber(number);
    });

    return splittedInput.map((number) => Number(number));
  }

  async inputBonusNumber() {
    const input = await readLineAsync(MESSAGE.input_bonus_number);

    this.#isEmpty(input);
    this.#isNotNumber(input);

    const bonusNumber = Number(input);

    return bonusNumber;
  }

  // 빈값
  #isEmpty(value) {
    throwError(ERROR_MESSAGE.empty, value === '');
  }

  #isNotNumber(value) {
    throwError(ERROR_MESSAGE.not_number, Number.isNaN(Number(value)));
  }
}

export default InputView;
