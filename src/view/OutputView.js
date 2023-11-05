import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from '../constants/messages.js';

export default class OutputView {
  static printLottosCount(lottoCount) {
    Console.print(OUTPUT_MESSAGES.printLottosCount(lottoCount));
  }

  static printLottoNumbers(lotto) {
    Console.print(OUTPUT_MESSAGES.printLottoNumbers(lotto));
  }

  static printLottoROI(lottoROI) {
    Console.print(OUTPUT_MESSAGES.printLottoROI(lottoROI));
  }
}
