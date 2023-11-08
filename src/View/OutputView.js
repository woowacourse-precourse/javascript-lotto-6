import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGES } from '../utils/Constants.js';

class OutputView {
  constructor() {}

  printLottoCounts(lottoCounts) {
    Console.print(lottoCounts + GAME_MESSAGES.CONFIRM_PURCHASED_LOTTOS_AMOUNT);
    Console.print('');
  }

  printLottoNumbers(lottos) {
    lottos.map((lotto, _) => { 
      Console.print(lotto);
    })
    Console.print('');
  }
}

export default OutputView;