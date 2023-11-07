import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../Constants/constants.js';

class OutputView {
  static printLottoNumbers(amount, lottoList) {
    Console.print(`\n${amount} ${MESSAGE.OUTPUT_LOTTO}`);
    for (const lotto of lottoList) {
      Console.print(lotto);
    }
  }

  static printPrize(prize) {
    Console.print(prize);
  }

  async printStatistics() {}
}
export default OutputView;
