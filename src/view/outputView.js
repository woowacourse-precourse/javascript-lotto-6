import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static async printError(message) {
    Console.print(message);
  }

  static async printLottos(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getLotto().join(', ')}]`);
    });
  }
}

export default OutputView;
