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
    Console.print(
      RANKING.fifthPlace + `${rankingObj['5등'] ?? 0}` + MESSAGE.amountUnit,
    );
    Console.print(
      RANKING.fourthPlace + `${rankingObj['4등'] ?? 0}` + MESSAGE.amountUnit,
    );
    Console.print(
      RANKING.thirdPlace + `${rankingObj['3등'] ?? 0}` + MESSAGE.amountUnit,
    );
    Console.print(
      RANKING.secondPlace + `${rankingObj['2등'] ?? 0}` + MESSAGE.amountUnit,
    );
    Console.print(
      RANKING.firstPlace + `${rankingObj['1등'] ?? 0}` + MESSAGE.amountUnit,
    );
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
