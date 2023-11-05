import { Console } from '@woowacourse/mission-utils';
import { EMPTY, OUTPUT_MESSAGE } from '../constant.js';

class OutputView {
  static print(message) {
    Console.print(message);
  }

  static printLotto(lottos) {
    Console.print(EMPTY);
    Console.print(`${lottos.length}${OUTPUT_MESSAGE.purchase}`);

    lottos.forEach((lotto) => {
      Console.print(`[${lotto.join(', ')}]`);
    });
  }

  static winningStatistics({ results, rate }) {
    Console.print(EMPTY);
    Console.print(OUTPUT_MESSAGE.statistics);
    Console.print(OUTPUT_MESSAGE.divider);

    [...Object.entries(results)].forEach((result) => {
      const rank = result[0];
      const count = result[1];
      Console.print(`${OUTPUT_MESSAGE[rank]}${count}개`);
    });

    Console.print(`총 수익률은 ${rate}%입니다.`);
  }
}

export default OutputView;
