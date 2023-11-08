import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES, LOTTO_GAME } from './utils/constants.js';
import LottoValidator from './LottoValidator.js';

class InputHandler {
  #numOfLottos;

  constructor() {
    this.#numOfLottos = 0;
  }

  async inputAmount() {
    const userAmount = await Console.readLineAsync(INPUT_MESSAGES.INPUT_AMOUNT);
    LottoValidator.validateAmount(userAmount);
    this.#numOfLottos = parseInt(userAmount / LOTTO_GAME.PRICE_UNIT);

    Console.print(INPUT_MESSAGES.PURCHASED_LOTTOS(this.#numOfLottos));

    return this.#numOfLottos;
  }
}

export default InputHandler;
