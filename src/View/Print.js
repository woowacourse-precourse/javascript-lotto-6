import { Console, Random } from '@woowacourse/mission-utils';
class Print {
  static printTickets(tickets = []) {
    Console.print(`\n${tickets.length}개를 구매했습니다.`);
    tickets.forEach((lotto) => {
      Console.print(lotto.toString());
    });
  }

  static printResults(results = []) {
    const prizeMoney = ['5000', '50000', '1500000', '30000000', '2000000000'];
    const matchCount = [3, 4, 5, 5, 6];
    results.forEach((result, index) => {
      const bonusText = index === 3 ? ', 보너스 볼 일치' : '';
      Console.print(
        `${matchCount[index]}개 일치${bonusText} (${prizeMoney[index].replace(
          /\B(?=(\d{3})+(?!\d))/g,
          ',',
        )}원) - ${result}개`,
      );
    });
  }

  static printEarningRate(earningRate = 0) {
    Console.print(`총 수익률은 ${earningRate}%입니다.`);
  }
}
export default Print;
