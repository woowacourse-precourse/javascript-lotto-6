import { Console } from '@woowacourse/mission-utils';

class OutputView {
  printLottoNumbes(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  printRanking(rankingObj) {
    Console.print(`3개 일치 (5,000원) - ${rankingObj['5등'] ?? 0}개`);
    Console.print(`4개 일치 (50,000원) - ${rankingObj['4등'] ?? 0}개`);
    Console.print(`5개 일치 (1,500,000원) - ${rankingObj['3등'] ?? 0}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankingObj['2등'] ?? 0}개`,
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${rankingObj['1등'] ?? 0}개`);
  }

  printSpace() {
    Console.print('');
  }

  printPrice(profit, cost) {
    Console.print(`총 수익률은 ${Math.round(profit / cost * 100 * 100) / 100}%입니다.`);
  }
  
}

export default OutputView;
