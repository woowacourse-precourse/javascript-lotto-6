import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/messages.js';

class OutputView {
  printAllLottos(lottoList) {
    Console.print(`\n${lottoList.length}${MESSAGE.bought}`);
    lottoList.forEach((lotto) => {
      Console.print(lotto.getNumber());
    });
  }
}
export default OutputView;
