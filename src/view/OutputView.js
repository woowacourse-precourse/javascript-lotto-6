import { Console } from '@woowacourse/mission-utils';
import { MESSAGE, RANKING, VALUE } from '../constants/constants.js';

class OutputView {
  printLottoNumbers(lottos) {
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

  printProfit(profit, cost) {
    Console.print(
      MESSAGE.profitHeader +
        ((profit / cost) * 100).toFixed(VALUE.decimalPlace) +
        MESSAGE.profitFooter,
    );
  }

  printMsg(msg) {
    Console.print(msg);
  }
}

export default OutputView;
