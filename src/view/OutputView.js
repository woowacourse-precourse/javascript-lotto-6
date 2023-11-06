import { Console } from '@woowacourse/mission-utils';
import { MESSAGE, RESULT } from '../util/constant.js';

const OutputView = {
  printError(error) {
    Console.print(error);
  },

  printLottoAmount(amount) {
    Console.print(MESSAGE.lottoAmount(amount));
  },

  printLottoList(lottos) {
    lottos.forEach(lotto => {
      Console.print(MESSAGE.lottoList(lotto));
    });
  },

  printAllResult(rank, benefit) {
    Console.print(RESULT.resultMessage);
    Console.print(RESULT.matchCount(rank));
    Console.print(RESULT.printBenefit(benefit));
  },
};

export default OutputView;
