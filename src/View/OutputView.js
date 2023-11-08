import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGES, RANK_MESSAGES,  } from '../utils/Constants.js';

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

  printWinningResult(counts) {
    Console.print(GAME_MESSAGES.STATICS_HEADER);
    Console.print(GAME_MESSAGES.DIVIDER);

    for (let rank = 5; rank >= 1; rank -= 1) {
      const message = RANK_MESSAGES[rank] + `${counts[rank]}` + GAME_MESSAGES.MESSSAGE_SUFFIX;
      Console.print(message);
    }
  }
}

export default OutputView;