import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGES } from '../utils/Constants.js';

class OutputView {
  printLottoCounts(lottoCounts) {
    Console.print(lottoCounts + GAME_MESSAGES.CONFIRM_PURCHASED_LOTTOS_AMOUNT);
  }
}

export default OutputView;