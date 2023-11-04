import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../util/constant.js';

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
};

export default OutputView;
