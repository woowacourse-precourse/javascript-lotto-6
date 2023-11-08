import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/OutputMessage.js';

class OutputView {
  static outputLottoPurchaseAmount(lottoList) {
    Console.print(`\n${lottoList.length}${OUTPUT_MESSAGE.boughtNumber}`);
    lottoList.forEach((lotto) => {
      Console.print(lotto.getNumbers());
    });
  }
  static outputMessage(message) {
    Console.print(message);
  }
}

export default OutputView;
