import { Console } from '@woowacourse/mission-utils';

class OutputView {
  print(message) {
    Console.print(message);
  }

  printLottos(lottos) {
    lottos.forEach(lotto => {
      this.print(`[${lotto.join(', ')}]`);
    });
  }
}

export default OutputView;
