import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static printLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(lotto.numbers);
    });
  }
}

export default OutputView;
