import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, REQUEST_MESSAGE } from '../constants/message.js';
import GameError from '../errors/GameError.js';
import paramType from '../lib/paramType/src/paramType.js';

export default class InputReader {
  async bonusNumber() {
    const userInput = await this.#onRead(REQUEST_MESSAGE.BONUS_NUMBER);
    return userInput;
  }

  async winningNumbers() {
    const userInput = await this.#onRead(REQUEST_MESSAGE.WINNING_NUMBERS);
    return userInput;
  }

  async purchasePrice() {
    const userInput = await this.#onRead(REQUEST_MESSAGE.PURCHASE_PRICE);
    return userInput;
  }

  async #onRead(queryMessage, _ = paramType(queryMessage, 'string')) {
    try {
      const response = await Console.readLineAsync(queryMessage);
      if (!this.#isOk(response)) {
        throw new GameError(ERROR_MESSAGE.INVALID_RESPONSE);
      }
      return response.trim();
    } catch (error) {
      this.#alert(error.message);
      throw error;
    }
  }

  #isOk(response) {
    return response !== undefined || response !== null;
  }

  #alert(message, _ = paramType(message, 'string')) {
    console.warn(message);
  }
}
