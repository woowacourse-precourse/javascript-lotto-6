import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printError(message) {
    Console.print(message);
  },

  printAutoLotto(lottos, purchaseAmount) {
    Console.print(`${purchaseAmount}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      Console.print(lotto);
    });
  },

  printLotteryResultsSummary(winningResult, rateOfReturn) {},
};

export default OutputView;
