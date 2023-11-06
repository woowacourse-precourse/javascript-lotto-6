import { Console } from '@woowacourse/mission-utils';
import { MESSAGE, RANKING } from '../constants/constants.js';

class OutputView {
  printLottoNumbes(lottos) {
    Console.print(`${lottos.length}` + MESSAGE.purchaseLotto);
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  printRanking(rankingObj) {
    Console.print(RANKING.fifth + `${rankingObj['5등'] ?? 0}개`);
    Console.print(RANKING.fourth + `${rankingObj['4등'] ?? 0}개`);
    Console.print(RANKING.third + `${rankingObj['3등'] ?? 0}개`);
    Console.print(RANKING.second + `${rankingObj['2등'] ?? 0}개`);
    Console.print(RANKING.first + `${rankingObj['1등'] ?? 0}개`);
  }

  printSpace() {
    Console.print('');
  }

  printPrice(profit, cost) {
    Console.print(
      MESSAGE.profitHeader +
        `${Math.round((profit / cost) * 100 * 100) / 100}` +
        MESSAGE.profitFooter,
    );
  }

  printMsg(msg) {
    Console.print(msg);
  }
}

export default OutputView;
