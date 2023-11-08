import { Console } from '@woowacourse/mission-utils';
import { RESULT_MESSEGE } from '../constant/messages.js';

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

  static async printCalculate(state) {
    Console.print(`\n당첨 통계\n---`);
    RESULT_MESSEGE.forEach((message, index) => {
      Console.print(`${message}${state[index]}개`);
    });
  }
}

export default OutputView;
