import MESSAGES from '../Constants/Messages.js';
import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  error(error) {
    Console.print(error);
  },

  buyLotto(quantity) {
    Console.print(MESSAGES.buyLottoQuantity(quantity));
  },

  issuedLotto(lotto) {
    Console.print(MESSAGES.lottoString(lotto));
  },

  result(rankMap, earningsPercent) {
    Console.print(MESSAGES.winning);
    Console.print(MESSAGES.resultBarLine);
    Console.print(MESSAGES.winningResult(rankMap));
    Console.print(MESSAGES.earningsPercent(earningsPercent));
  }
}

export default OutputView;