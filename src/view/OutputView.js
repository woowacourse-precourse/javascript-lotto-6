import { MissionUtils } from '@woowacourse/mission-utils';
import STATIC_RESULT from '../constants/StaticResult.js';

const OutputView = {
  // printQuantity(quantity) {
  //   MissionUtils.Console.print(`\n${quantity}개를 구매했습니다.`);
  // },

  // printLottos(lottos) {
  //   lottos.forEach((lotto) => {
  //     MissionUtils.Console.print(JSON.stringify(lotto).replace(/,/g, ', '));
  //   });
  // },

  // printBenefitRate(rate) {
  //   MissionUtils.Console.print(`총 수익률은 ${rate}%입니다.`);
  //   return;
  // },

  printPurchaseAmount(amount) {
    MissionUtils.Console.print(`\n${amount}개를 구매했습니다.`);
  },

  // 도메인 생성 후 작업 에정
  printLottos(lottos) {
    for (let i = 0; i < lottos.length; i++) {
      MissionUtils.Console.print(`[${lottos[i].join(', ')}]`);
    }
  },

  printRevenueResult(revenue) {
    MissionUtils.Console.print(`총 수익률은 ${revenue}%입니다.\n`);
  },

  // 도메인 생성 후 작업 에정
  printResultStatistic(winningStatic) {
    MissionUtils.Console.print('\n당첨통계\n---');
    for (let i = 0; i < winningStatic.length; i++) {
      MissionUtils.Console.print(`${STATIC_RESULT[i]}${winningStatic[4 - i]}개`);
    }
  },
};

export default OutputView;
