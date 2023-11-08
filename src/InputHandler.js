import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES, LOTTO_GAME } from './utils/constants.js';
import LottoValidator from './LottoValidator.js';

class InputHandler {
  #numOfLottos;

  constructor() {
    this.#numOfLottos = 0;
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
}

export default InputHandler;
