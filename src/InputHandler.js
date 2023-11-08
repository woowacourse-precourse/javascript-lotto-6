import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES, LOTTO_GAME } from './utils/constants.js';
import LottoValidator from './LottoValidator.js';

class InputHandler {
  #numOfLottos;
  #winningNumbers;
  #bonusNumber;

  constructor() {
    this.#numOfLottos = 0;
    this.#winningNumbers = [];
    this.#bonusNumber = 0;
  }

  async #getUserInput(promptMessage, validateFunction) {
    try {
      const initialInput = await Console.readLineAsync(promptMessage);
      const userInput = initialInput.trim();
      validateFunction(userInput);

      return userInput;
    } catch (error) {
      Console.print(error.message);

      return this.#getUserInput(promptMessage, validateFunction);
    }
  }

  async inputAmount() {
    const userAmount = await this.#getUserInput(
      INPUT_MESSAGES.INPUT_AMOUNT,
      LottoValidator.validateAmount
    );
    this.#numOfLottos = parseInt(userAmount / LOTTO_GAME.PRICE_UNIT);

    Console.print(INPUT_MESSAGES.PURCHASED_LOTTOS(this.#numOfLottos));

    return this.#numOfLottos;
  }

  async inputWinningNumbers() {
    this.#winningNumbers = await this.#getUserInput(
      INPUT_MESSAGES.INPUT_WINNING_NUMBERS,
      (input) => {
        const numbers = input.split(',').map(Number);
        LottoValidator.validateNumbers(numbers);

        return numbers;
      }
    );

    return this.#winningNumbers;
  }

  async inputBonusNumber() {
    const bonusNumber = await Console.readLineAsync(
      INPUT_MESSAGES.INPUT_BONUS_NUMBER
    );

    this.#bonusNumber = bonusNumber;

    return this.#bonusNumber;
  }
}

export default InputHandler;
