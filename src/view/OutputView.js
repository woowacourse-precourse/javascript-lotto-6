import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static printLottos(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach(lotto => {
      Console.print(`[${lotto.join(', ')}]`);
    });
  }

  static printResults(results) {
    const order = [3, 4, 5, '5+1', 6];
    Console.print('당첨 통계');
    Console.print('---');

    order.map(key => {
      const { count } = results[key];
      const { prize } = results[key];
      Console.print(
        `${key}개 일치${
          key === '5+1' ? ', 보너스 볼 일치' : ''
        } (${prize.toLocaleString()}원)- ${count}개`,
      );
    });
  }

  static printProfit(profit) {
    Console.print(`총 수익률은 ${profit}%입니다.`);
  }
}

export default OutputView;