import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printLottosCount(ticketCount) {
    Console.print(`${ticketCount}개를 구매했습니다.`);
  },

  printLottos(lottos) {
    lottos.forEach((lotto) => {
      const numbers = lotto.getNumbers().toString().split(',').join(', ');
      Console.print(`[${numbers}]`);
    });
  },

  printStatus(result) {
    Console.print('당첨 통계');
    Console.print('---');
    Console.print(
      `3개 일치 (5,000원) - ${result[5]}개\n4개 일치 (50,000원) - ${result[4]}개\n5개 일치 (1,500,000원) - ${result[3]}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[2]}개\n6개 일치 (2,000,000,000원) - ${result[1]}개`
    );
  },

  printEarningRate(earningRate) {
    Console.print(`총 수익률은 ${earningRate}%입니다.`);
  },
};

export default OutputView;
