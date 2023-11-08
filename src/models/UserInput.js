import { Console } from '@woowacourse/mission-utils';
import USER_INPUT from './messages.js';

class UserInput {
  #line;

  async #getLine(message) {
    this.#line = await Console.readLineAsync(message);
    return this.#line;
  }

  getTotalPrice = () => this.#getLine(USER_INPUT.totalPrice);

  getWinningNumbers = () => this.#getLine(USER_INPUT.winningNumbers);

  getBonusNumber = () => this.#getLine(USER_INPUT.bonusNumber);
}
export default UserInput;

// const userinput = new UserInput();

// userinput.getTotalPrice();
