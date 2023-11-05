import { Console } from '@woowacourse/mission-utils';

class OutputView {
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
