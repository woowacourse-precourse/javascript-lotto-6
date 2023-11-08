import { Console } from '@woowacourse/mission-utils';
import CONSTANTS from './constants.js';

class UserInput {
  #line;

  async #getLine(message) {
    this.#line = await Console.readLineAsync(message);
    return this.#line;
  }

  getTotalPrice = () => this.#getLine(CONSTANTS.USER_INPUT.totalPrice);

  getWinningNumbers = () => this.#getLine(CONSTANTS.USER_INPUT.winningNumbers);

  getBonusNumber = () => this.#getLine(CONSTANTS.USER_INPUT.bonusNumber);
}
export default UserInput;
