import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/messages';

class OutputView {
  static printLotto(purchaseLotto) {
    const lottoCount = purchaseLotto.length;

    Console.print(`${OUTPUT_MESSAGE.enter}${lottoCount}${OUTPUT_MESSAGE.purchase}`);
    purchaseLotto.forEach((num) => Console.print(`[${num.join(', ').toString()}]`));
  }
}

export default OutputView;
