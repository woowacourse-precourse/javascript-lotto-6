import { Console } from '@woowacourse/mission-utils';
import GAME_MESSAGES from '../constants/GameMessage.js';

class OutputView {
  #print;

  constructor(print = Console.print) {
    this.#print = print;
  }

  #printMessage(message) {
    this.#print(message);
  }

  printLotteryResultMessage() {
    this.#printMessage(`${GAME_MESSAGES.lotteryResult}`);
  }
}

export default OutputView;
