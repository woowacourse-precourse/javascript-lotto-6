import { Console } from '@woowacourse/mission-utils';
import COMMON from '../constants/common.js';

class OutputView {
  static printLineBreak() {
    Console.print(COMMON.empty);
  }

  static printNumberOfLottos(numberOfLottos) {
    Console.print(`${numberOfLottos}개 구매했습니다.`);
  }

  static printLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(lotto.numbers);
    });
  }
}

export default OutputView;
