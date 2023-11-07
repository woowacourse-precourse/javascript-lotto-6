import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../Constants/constants.js';

class OutputView {
  static async printLottoNumbers(amount, lottoList) {
    Console.print(`\n${amount} ${MESSAGE.OUTPUT_LOTTO}`);
    for (const lotto of lottoList) {
      Console.print(lotto);
    }
  }

  async printPrize() {
    Console.print();
  }

  async printStatistics() {}
}
export default OutputView;
