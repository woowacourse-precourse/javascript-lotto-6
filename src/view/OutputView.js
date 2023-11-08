import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../Constants/Messages.js';

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

  result(ranks, earningsPercent) {
    Console.print(MESSAGES.winning);
    Console.print(MESSAGES.resultBarLine);
    Console.print(MESSAGES.winningResult(ranks));
    Console.print(MESSAGES.earningsPercent(earningsPercent));
  },
};

export default OutputView;
